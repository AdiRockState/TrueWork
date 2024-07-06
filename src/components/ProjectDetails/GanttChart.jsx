import React from 'react';
import styles from './InvestmentBreakdownChart.module.css';

const InvestmentBreakdownChart = ({ data, total }) => {
  return (
    <div className={styles.chartContainer}>
    <div className={`flex justify-between ${styles.header}`}>
      <div className={styles.title}>Investment Breakdown</div>
      <div className={styles.totalAmount}>₹{total} Crs</div>
      </div>
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
        <div className='grid grid-cols-4 gap-4'>
      {data.map((item, index) => (
        <div className={`${styles.segmentLabel}`}>
        <div className="flex items-center">
        <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: item.color }}></div>
        <div className={styles.iname}>{item.name}</div>
      </div>
          <div className={`${styles.ival} ml-6`}>₹{item.value} Crs </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default InvestmentBreakdownChart;


