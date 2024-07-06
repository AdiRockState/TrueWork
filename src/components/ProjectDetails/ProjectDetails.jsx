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

const gdata = [
  { name: 'Down Payment', value: 2.25, color: '#04444E' },
  { name: 'Interest', value: 0.75, color: '#FF5733' },
  { name: 'Principal', value: 1.50, color: '#FFBD33' },
  { name: 'Stamp Duty', value: 0.50, color: '#33FFF6' },
  { name: 'Extra Charges', value: 1.00, color: '#FF33A1' },
  { name: 'Reg. Charges', value: 0.5, color: '#F6FF33' }
];
const total = gdata.reduce((sum, item) => sum + item.value, 0);

const ProjectDetails = ({ data }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div className="md:col-span-2">
      <div className='h-full w-full md:w-3/4"'>
      <ImageCarousel images={data.images} />
      <Overview title="Project Overview" details={data.projectOverview} />
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
    </div>
  </div>
);

export default ProjectDetails;
