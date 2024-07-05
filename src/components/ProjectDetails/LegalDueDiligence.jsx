import React from 'react';

const LegalDueDiligence = ({ title, items }) => (
  <div className="p-4 bg-white shadow rounded">
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <div className='flex mr-4'>
      {items.map((item, index) => (
        <div key={index} className="mb-1">
          <img src={item.icon} alt={item.label} className="inline-block w-6 h-6 mr-2" />
          {item.label}
        </div>
      ))}
    </div>
  </div>
);

export default LegalDueDiligence;
