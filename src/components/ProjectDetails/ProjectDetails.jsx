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
import styles from './ProjectDetails.module.css';
import True from '/icons-1/truselected.svg';
import Rera from '/icons-1/Rera.svg';

const ProjectDetails = ({ data }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div className="md:col-span-2">
      <div className='h-full w-full md:w-3/4"'>
      <div className='flex gap-2.5'><div className={`${styles.bigheading}`}>Mahindra Zen</div><img src={True}></img><img src={Rera}></img></div>
      <div className="flex mb-6"><div className={`${styles.upd} mr-2`}>Updated on</div><div className={styles.updt}>1 Jun 2024</div></div>
      <ImageCarousel images={data.images} />
      <Overview title="Project Overview" details={data.projectOverview} />
      <InvestmentBreakdownChart data={data.gdata} total={data.gdata.reduce((sum, item) => sum + item.value, 0)} />
      <CashFlowsTable data={data.cashFlowsTable} />
      <PointsList title="Why True State Selected" points={data.pointsList.trueStateSelected} />
      <PointsList title="Things You Should Also Consider" points={data.pointsList.thingsToConsider} />
      <LegalDueDiligence title="Legal Due Diligence"/>
      <LocationAnalysis filters={data.locationAnalysis.filters} defaultMarker={data.locationAnalysis.defaultMarker} markers={data.locationAnalysis.markers} />
      <Documents documents={data.documents} />
      <SimilarProperties similarProperties={data.similarProperties} />
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
