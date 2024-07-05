import React from 'react';

const Documents = ({ documents }) => (
  <div className="p-4 bg-white shadow rounded">
    <h2 className="text-xl font-semibold mb-2">Documents</h2>
    {documents.map((doc, index) => (
      <button key={index} className="w-full text-left py-2 px-4 border mt-2 rounded hover:bg-gray-100">
        {doc}
      </button>
    ))}
  </div>
);

export default Documents;
