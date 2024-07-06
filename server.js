import express from 'express';
import bodyParser from 'body-parser';
import moment from 'moment';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createObjectCsvWriter as createCsvWriter } from 'csv-writer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = process.env.PORT || 3000;
const jsonFilePath = 'wishlist.json';
app.use(express.json());
// Middlewares
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
}));
app.use(bodyParser.json());

// Load the JSON data
let projects = [];
fs.readFile('public/updated_projects.json', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    projects = JSON.parse(data);
});

// Helper Functions

// XIRR Calculation Function
function XIRR(values, dates, guess = 0.1) {
    // Calculates the resulting amount
    const irrResult = (values, dates, rate) => {
        const r = rate + 1;
        return values.reduce((acc, val, i) => acc + val / Math.pow(r, moment(dates[i]).diff(moment(dates[0]), 'days') / 365), values[0]);
    };

    // Calculates the first derivation
    const irrResultDeriv = (values, dates, rate) => {
        const r = rate + 1;
        return values.reduce((acc, val, i) => acc - ((moment(dates[i]).diff(moment(dates[0]), 'days') / 365) * val) / Math.pow(r, (moment(dates[i]).diff(moment(dates[0]), 'days') / 365) + 1), 0);
    };

    const positive = values.some(value => value > 0);
    const negative = values.some(value => value < 0);

    if (!positive || !negative) return '#NUM!';

    let resultRate = guess;
    const epsMax = 1e-10;
    const iterMax = 50;

    for (let i = 0; i < iterMax; i++) {
        const resultValue = irrResult(values, dates, resultRate);
        const newRate = resultRate - resultValue / irrResultDeriv(values, dates, resultRate);
        if (Math.abs(newRate - resultRate) <= epsMax && Math.abs(resultValue) <= epsMax) {
            return newRate;
        }
        resultRate = newRate;
    }

    return '#NUM!';
}

// IRR Calculation Function
function CalcIRR(values, guess = 0.1) {
    const dates = values.map((_, i) => i === 0 ? 0 : dates[i - 1] + 365);
    const positive = values.some(value => value > 0);
    const negative = values.some(value => value < 0);

    if (!positive || !negative) return '#NUM!';

    let resultRate = guess;
    const epsMax = 1e-10;
    const iterMax = 50;

    for (let i = 0; i < iterMax; i++) {
        const resultValue = values.reduce((acc, val, i) => acc + val / Math.pow(resultRate + 1, dates[i] / 365), values[0]);
        const newRate = resultRate - resultValue / values.reduce((acc, val, i) => acc - (dates[i] / 365 * val) / Math.pow(resultRate + 1, (dates[i] / 365) + 1), 0);
        if (Math.abs(newRate - resultRate) <= epsMax && Math.abs(resultValue) <= epsMax) {
            return newRate;
        }
        resultRate = newRate;
    }

    return '#NUM!';
}

// YES Function
const YES = (ebwTokenAmount, bookingAmount, startDate1, startDate2, totalAmount, intrestRate, emi, entries, finalx, rent, cashflows, dates, extraCharges) => {
    intrestRate /= 1200;
    let loanBalance = (totalAmount * entries[0].pay) / 100 - (ebwTokenAmount + bookingAmount);
    let currentDate = new Date(entries[0].date);
    cashflows.push(-ebwTokenAmount, -bookingAmount);
    dates.push(new Date(startDate1), new Date(startDate2));
    entries.shift();
    const payment = -emi + rent;
    const finalDate = new Date(finalx.date);
    const extraDate = new Date(extraCharges.date);

    while (!(currentDate.getMonth() === finalDate.getMonth() && currentDate.getFullYear() === finalDate.getFullYear())) {
        const matchingEntry = entries.find(entry => {
            const entryDate = new Date(entry.date);
            return entryDate.getMonth() === currentDate.getMonth() && entryDate.getFullYear() === currentDate.getFullYear();
        });

        if (matchingEntry) {
            loanBalance += ((matchingEntry.pay) * totalAmount) / 100;
        }

        if (extraDate.getMonth() === currentDate.getMonth() && currentDate.getFullYear() === extraDate.getFullYear()) {
            loanBalance += extraCharges.pay;
        }

        const interestPayment = loanBalance * intrestRate;
        loanBalance += interestPayment - emi;
        cashflows.push(payment);
        dates.push(new Date(currentDate));
        currentDate.setMonth(currentDate.getMonth() + 1);
    }

    const finalPayment = finalx.pay - loanBalance - emi;
    cashflows.push(finalPayment);
    dates.push(new Date(finalx.date));
}

// Function to filter projects
const filterProjects = (projects, filters) => {
    return projects.filter(project =>
        project['Project Name'].toLowerCase().includes(filters.searchTerm.toLowerCase()) &&
        (!filters.investmentType || project['Investment Type'] === filters.investmentType) &&
        (!filters.strategy || project['Strategy'] === filters.strategy) &&
        project['Cost'] >= filters.minInvestment &&
        (!filters.tenure || project['Tenure'] === filters.tenure)
    );
};

// API Endpoints

// Projects endpoint
app.post('/api/projects', (req, res) => {
    try {
        const { offset = 0, limit, ...filters } = req.body;
        const filteredProjects = filterProjects(projects, filters);
        const totalProjects = filteredProjects.length;
        const paginatedProjects = limit !== undefined ? filteredProjects.slice(offset, offset + limit) : filteredProjects;

        res.json({
            projects: paginatedProjects,
            totalProjects,
        });
    } catch (error) {
        console.error("Error processing request:", error);
        res.status(500).json({ error: error.toString() });
    }
});

// XIRR calculation endpoint
app.post('/api/calculate_xirr', (req, res) => {
    try {
        const { cashflows, dates } = req.body;
        const dateObjects = dates.map(dateString => moment(dateString).toDate());
        const xirr = XIRR(cashflows, dateObjects);

        res.json({
            xirr: parseFloat((xirr * 100).toFixed(2)),
            cashflows,
        });
    } catch (error) {
        res.status(400).json({ error: error.toString() });
    }
});

// IRR calculation endpoint
app.post('/api/calculate_irr', (req, res) => {
    try {
        const { initial_investment, loan_amount, emi_amount, rent, repo_rate, net_interest_margin, loan_tenure_months, area_sqft, sale_proceeds, start_date } = req.body;
        const totalInterestRate = (repo_rate + net_interest_margin) / 100;
        const monthlyInterestRate = totalInterestRate / 12;
        const totalInvestment = initial_investment + loan_amount;
        const startDate = new Date(start_date);
        const startMonth = startDate.getMonth() + 1;
        let cashflows = [];
        let loanBalance = loan_amount;
        let monthsProcessed = 0;
        const firstYearMonths = Math.min(12 - startMonth + 1, loan_tenure_months);

        for (let month = startMonth; month < startMonth + firstYearMonths; month++) {
            const interestPayment = loanBalance * monthlyInterestRate;
            const principalPayment = emi_amount - interestPayment;
            loanBalance -= principalPayment;
            monthsProcessed++;
        }

        cashflows.push(-initial_investment - firstYearMonths * emi_amount + rent * firstYearMonths);

        const remainingMonths = loan_tenure_months - monthsProcessed;
        const fullYears = Math.floor(remainingMonths / 12);
        for (let year = 0; year < fullYears; year++) {
            const monthlyCashflows = Array.from({ length: 12 }, () => {
                const interestPayment = loanBalance * monthlyInterestRate;
                const principalPayment = emi_amount - interestPayment;
                loanBalance -= principalPayment;
                return -emi_amount;
            });

            const totalCashflow = monthlyCashflows.reduce((acc, val) => acc + val, 0);
            cashflows.push(totalCashflow + rent * 12);
        }

        const lastPartialYearMonths = remainingMonths % 12;
        for (let month = 0; month < lastPartialYearMonths; month++) {
            const interestPayment = loanBalance * monthlyInterestRate;
            const principalPayment = emi_amount - interestPayment;
            loanBalance -= principalPayment;
        }

        const emiTillEnd = -emi_amount * lastPartialYearMonths;
        cashflows.push(sale_proceeds + emiTillEnd - loanBalance + rent * lastPartialYearMonths);
        cashflows = cashflows.filter(val => !isNaN(val) && isFinite(val));

        const irr = CalcIRR(cashflows);
        if (irr === '#NUM') throw new Error("At least one positive and one negative cashflow required");

        const costPerSqft = totalInvestment / area_sqft;

        res.json({
            irr: parseFloat((irr * 100).toFixed(2)),
            cost_per_sqft: parseFloat(costPerSqft.toFixed(2)),
            cashflows_yearly: cashflows,
        });
    } catch (error) {
        res.status(400).json({ error: error.toString() });
    }
});

// Universal IRR calculation endpoint
app.post('/api/uc_calculate_irr', (req, res) => {
    try {
        const { ebwTokenAmount, bookingAmount, startDate1, startDate2, totalAmount, intrestRate, emi, rent, newEntries, finalx, extraCharges } = req.body;
        let cashflows = [], dates = [];
        YES(ebwTokenAmount, bookingAmount, startDate1, startDate2, totalAmount, intrestRate, emi, newEntries, finalx, rent, cashflows, dates, extraCharges);
        const irr = XIRR(cashflows, dates);

        res.json({
            irr: parseFloat((irr * 100).toFixed(2)),
            cashflows_yearly: cashflows,
        });
    } catch (error) {
        res.status(400).json({ error: error.toString() });
    }
});

// Schedule route
app.post('/schedule', (req, res) => {
    const { day, date, time, discussion, meetingType } = req.body;
    const csvLine = `${day},${date},${time},${discussion},${meetingType}\n`;

    const csvFilePath = path.join(__dirname, 'public', 'schedule.csv');
    const writeHeader = !fs.existsSync(csvFilePath);

    fs.appendFile(csvFilePath, writeHeader ? `Day,Date,Time,Discussion,MeetingType\n${csvLine}` : csvLine, (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Server error');
        }
        res.send('Schedule saved');
    });
});

// Wishlist Routes

const readJsonFile = () => {
    if (fs.existsSync(jsonFilePath)) {
      const data = fs.readFileSync(jsonFilePath, 'utf-8');
      return JSON.parse(data);
    }
    return [];
  };
  
  // Helper function to write JSON data
  const writeJsonFile = (data) => {
    fs.writeFileSync(jsonFilePath, JSON.stringify(data, null, 2), 'utf-8');
  };
  
  // Define your routes
  app.post('/wishlist', (req, res) => {
    const project = req.body;
  
    try {
      const existingData = readJsonFile();
      existingData.push(project);
      writeJsonFile(existingData);
      res.status(200).send('Project added to wishlist');
    } catch (error) {
      res.status(500).send('Error adding project to wishlist');
    }
  });
  
  app.delete('/wishlist', (req, res) => {
    const project = req.body;
  
    try {
      let existingData = readJsonFile();
      existingData = existingData.filter(p => p['Project Name'] !== project['Project Name']);
      writeJsonFile(existingData);
      res.status(200).send('Project removed from wishlist');
    } catch (error) {
      res.status(500).send('Error removing project from wishlist');
    }
  });
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
