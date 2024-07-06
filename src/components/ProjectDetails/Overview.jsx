import React from 'react';
import styles from './ProjectDetails.module.css'

const Overview = ({ title,details }) => (
  <div className="p-4 bg-white shadow rounded">
    <h2 className={`${styles.heading}`}>{title}</h2>
    <div className="grid grid-cols-4 gap-4">
      {details.map((detail, index) => (
        <div key={index} className="">
          <div className={styles.heading1}><strong>{detail.label}:</strong></div>
           <div>{detail.value}</div>
        </div>
      ))}
    </div>
  </div>
);

export default Overview;
