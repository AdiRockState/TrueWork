import React from 'react';
import GreenTick from '/icons-1/GreenTick.svg';
import Danger from '/icons-1/danger.svg';

const items =
  [
      { icon: GreenTick, label: 'RERA' },
      { icon: Danger, label: 'Title Clearance' },
    ];

const LegalDueDiligence = ({ title }) => (
  <div className="p-4 bg-white shadow rounded">
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <div className='flex mr-4'>
      {items.map((item, index) => (
        <div key={index} className="mb-1 flex mr-4 border border-gray-400 rounded-md px-2 py-1">
          <img src={item.icon} alt={item.label} className="inline-block w-6 h-6 mr-1" />
          <div>{item.label}</div>
        </div>
      ))}
    </div>
  </div>
);

export default LegalDueDiligence;
