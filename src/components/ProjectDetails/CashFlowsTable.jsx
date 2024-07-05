import React from 'react';

const CashFlowsTable = ({ data }) => (
  <table className="min-w-full bg-white border">
    <thead>
      <tr>
        {data.columns.map((col, index) => (
          <th key={index} className="py-2 px-4 border">{col}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.rows.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {row.map((cell, cellIndex) => (
            <td key={cellIndex} className="py-2 px-4 border">{cell}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

export default CashFlowsTable;
