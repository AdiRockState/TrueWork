import React from 'react';

const Overview = ({ details }) => (
  <div className="p-4 bg-white shadow rounded">
    <h2 className="text-xl font-semibold mb-4">Project Overview</h2>
    <div className="grid grid-cols-4 gap-4">
      {details.map((detail, index) => (
        <div key={index} className="">
          <div><strong>{detail.label}:</strong></div>
           <div>{detail.value}</div>
        </div>
      ))}
    </div>
  </div>
);

export default Overview;
