import React from 'react';
import ImageCarousel from './ImageCarousel';
import Overview from './Overview';
import InvestmentBreakdownChart from './GanttChart';
import CashFlowsTable from './CashFlowsTable';
import PointsList from './PointsList';
import LegalDueDiligence from './LegalDueDiligence';
import LocationAnalysis from './LocationAnalysis';
import Documents from './Documents';
import SimilarProperties from './SimilarProperties';
import InvestmentCalculator from './InvestmentCalculator';

const data = {
  images: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150'],
  projectOverview: [
    { label: 'Location', value: 'Hsr Layout' },
    { label: 'Configuration', value: '1,2,3 BHK' },
    { label: 'Stage', value: 'New Launch' },
    { label: 'Rera No.', value: 'PRM/KA/201238790a' },
    { label: 'Units', value: '500' },
    { label: 'Unit left', value: '200' },
    { label: 'Tower', value: 'G+14' },
    { label: 'Area', value: '70 Acres' },
    { label: 'Possession By', value: '2026' },
    { label: 'Builder', value: 'Mahindra' },
    { label: 'Age', value: '2 year' },
    { label: 'Type', value: 'Villa & Row houses' },
    { label: 'Construction started', value: '2024' },
    { label: 'Type', value: 'Apartment' },
    { label: 'Builder category', value: 'Cat B' },
  ],
  investmentOverview: [
    { label: 'Total Investment', value: '1.25 Cr' },
    { label: 'Total Returns', value: '1.5 Cr' },
    // More details...
  ],
  ganttChart: [
    {
      name: 'Task 1',
      start: Date.UTC(2024, 6, 1),
      end: Date.UTC(2024, 6, 15),
    },
    {
      name: 'Task 2',
      start: Date.UTC(2024, 6, 16),
      end: Date.UTC(2024, 6, 30),
    },
    // More tasks...
  ],
  cashFlowsTable: {
    columns: ['Year', 'Down payment', 'Rental', 'Net EMI', 'Sale', 'Loan Payment at Sale', 'Net Cash Outflow'],
    rows: [
      ['1', '14,25,000', '0', '0', '0', '0', '14,25,000'],
      ['2', '0', '0', '0', '0', '0', '0'],
      // More rows...
    ],
  },
  pointsList: {
    trueStateSelected: ['Point 1', 'Point 2', 'Point 3'],
    thingsToConsider: ['Point A', 'Point B', 'Point C'],
  },
  legalDueDiligence: [
    { icon: '/path/to/icon.png', label: 'RERA' },
    { icon: '/path/to/icon.png', label: 'Title Clearance' },
    // More items...
  ],
  locationAnalysis: {
    filters: {
      Education: ['School', 'College'],
      Transportation: ['Bus Stop', 'Train Station'],
      // More filters...
    },
    defaultMarker: { lat: 50.879, lng: 4.6997 },
    markers: {
      School: [{ lat: 50.879, lng: 4.6997 }],
      // More markers...
    },
  },
  documents: ['Master Plan', 'Brochure'],
  similarProperties: [
    { name: 'Property 1', location: 'Location 1', price: '1 Cr', area: '1000 sqft' },
    // More properties...
  ],
  investmentCalculator: {
    configurations: [
      { value: '1BHK', label: '1BHK (1000 sqft)' },
      // More configurations...
    ],
    strategies: [
      { value: 'buy', label: 'Buy' },
      { value: 'rent', label: 'Rent' },
      // More strategies...
    ],
    sliders: [
      { name: 'tenure', label: 'Tenure', min: 1, max: 30, default: 15 },
      // More sliders...
    ],
  },
};

const gdata = [
  { name: 'Interest', value: 1.25, color: '#FF5733' },
  { name: 'Principal', value: 1.25, color: '#FFBD33' },
  { name: 'Stamp Duty', value: 1.25, color: '#33FFF6' },
  { name: 'Extra Charges', value: 1.25, color: '#FF33A1' },
  { name: 'Reg. Charges', value: 1.25, color: '#F6FF33' }
];
const total = 6.25;

const ProjectDetails = ({ data }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div className="md:col-span-2">
      <div className='h-full w-full md:w-3/4"'>
      <ImageCarousel images={data.images} />
      <Overview title="Project Overview" details={data.projectOverview} />
      <Overview title="Investment Overview" details={data.investmentOverview} />
      <InvestmentBreakdownChart data={gdata} total={total} />
      <CashFlowsTable data={data.cashFlowsTable} />
      <PointsList title="Why True State Selected" points={data.pointsList.trueStateSelected} />
      <PointsList title="Things You Should Also Consider" points={data.pointsList.thingsToConsider} />
      <LegalDueDiligence title="Legal Due Diligence" items={data.legalDueDiligence} />
      <LocationAnalysis filters={data.locationAnalysis.filters} defaultMarker={data.locationAnalysis.defaultMarker} markers={data.locationAnalysis.markers} />
      <Documents documents={data.documents} />
      <SimilarProperties properties={data.similarProperties} />
      </div>
    </div>
    <div className="md:col-span-1">
      <div className="h-full w-full">
        <InvestmentCalculator
          configurations={data.investmentCalculator.configurations}
          strategies={data.investmentCalculator.strategies}
          sliders={data.investmentCalculator.sliders}
        />
      </div>
      {/* Additional components for the right side can be added here */}
    </div>
  </div>
);

export default ProjectDetails;
