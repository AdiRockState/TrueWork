import React from 'react';
import { div } from 'three/examples/jsm/nodes/Nodes.js';

const PointsList = ({ title, points }) => (
  <div className="p-4 bg-white shadow rounded">
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <div className="pl-4">
      {points.map((point, index) => (
        <div className='flex'>
            <img className='pr-4' src="/icons-1/like.svg" alt="" />
        <p key={index}>{point}</p>
        </div>
      ))}
    </div>
  </div>
);

export default PointsList;
