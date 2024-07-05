import React from 'react';
import styles from './InvestmentBreakdownChart.module.css';
import { div } from 'three/examples/jsm/nodes/Nodes.js';

const InvestmentBreakdownChart = ({ data, total }) => {
  return (
    <div className={styles.chartContainer}>
      <h2>Investment Breakdown</h2>
      <div className={styles.chartBar}>
        {data.map((item, index) => (
          <div
            key={index}
            className={styles.chartSegment}
            style={{
              backgroundColor: item.color,
              width: `${(item.value / total) * 100}%`,
            }}
          >
            
          </div>
          
        ))}
      </div>
        <div className='flex justify-center'>
      {data.map((item, index) => (
        <div className='grid grid-cols-4 gap-4'>
        <div className={styles.segmentLabel}>
        {item.name} <br /> ₹{item.value} Crs
      </div>
      </div>
      ))}
      </div>
      <div className={styles.totalAmount}>₹{total} Lac</div>
    </div>
  );
};

export default InvestmentBreakdownChart;


