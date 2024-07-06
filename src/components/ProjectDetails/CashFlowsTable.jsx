import React from 'react';
import styles from './ProjectDetails.module.css';

const CashFlowsTable = ({ data }) => {
  return (
    <>
    <h1 className={`${styles.heading} mt-9 p-4`}>Cash Flows</h1>
    <div className='min-w-full rounded-xl border border-gray-200 mt-5'>
    <table className='min-w-full'>
      <thead>
        <tr>
          <th className="px-3 py-2 border-b border-gray-300 text-left text-xs font-semibold tracking-wider">Category</th>
          {data.columns.map((col, index) => (
            <th key={index} className="px-3 py-3 border-b border-gray-300 text-left text-xs font-semibold tracking-wider">{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.rows.map((row, rowIndex) => (
          <tr key={rowIndex} className={`${rowIndex === data.rows.length - 1 ? 'rounded-b-lg' : ''}`}>
            <td className={`px-3 py-2 ${rowIndex===data.rows.length -1 ?'':'border-b border-gray-300'}`}>{data.rowHeaders[rowIndex]}</td>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} className={`px-3 py-2 ${rowIndex===data.rows.length -1 ?'':'border-b border-gray-300'}`}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    </>
  );
};

export default CashFlowsTable;
