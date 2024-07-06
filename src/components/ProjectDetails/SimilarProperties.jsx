import React, { useState } from 'react';

const SimilarProperties = ({ similarProperties }) => {
  const [search, setSearch] = useState('');
  const [filteredProperties, setFilteredProperties] = useState(similarProperties);

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearch(searchTerm);
    setFilteredProperties(
      similarProperties.filter(property =>
        property.name.toLowerCase().includes(searchTerm)
      )
    );
  };

  return (
    <div className="p-4 bg-white shadow rounded">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Similar Properties</h2>
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Search Project"
          className="mt-4 p-2 border w-60 rounded"
        />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              {filteredProperties.map((property, index) => (
                <th key={index} className="py-2 px-4 border text-left">{property.name}</th>
              ))}
              <th className="py-2 px-4 border text-left"></th>
            </tr>
          </thead>
          <tbody>
            {['location', 'config', 'unitPrice', 'stage', 'investmentAmount', 'targetPrice'].map((field, rowIndex) => (
              <tr key={rowIndex}>
                {filteredProperties.map((property, colIndex) => (
                  <td key={colIndex} className="py-2 px-4 border">
                    {rowIndex === 0 && (
                      <>
                        <div className="text-sm font-semibold">Location</div>
                        <div className="text-sm">{property.location}</div>
                      </>
                    )}
                    {rowIndex === 1 && (
                      <>
                        <div className="text-sm font-semibold">Preferred Config.</div>
                        <div className="text-sm">{property.config}</div>
                      </>
                    )}
                    {rowIndex === 2 && (
                      <>
                        <div className="text-sm font-semibold">Unit Price</div>
                        <div className="text-sm">{property.unitPrice}</div>
                      </>
                    )}
                    {rowIndex === 3 && (
                      <>
                        <div className="text-sm font-semibold">Stage</div>
                        <div className="text-sm">{property.stage}</div>
                      </>
                    )}
                    {rowIndex === 4 && (
                      <>
                        <div className="text-sm font-semibold">Investment Amount</div>
                        <div className="text-sm">{property.investmentAmount}</div>
                      </>
                    )}
                    {rowIndex === 5 && (
                      <>
                        <div className="text-sm font-semibold">Target Price</div>
                        <div className="text-sm">{property.targetPrice}</div>
                      </>
                    )}
                  </td>
                ))}
                {rowIndex === 0 && (
                  <td rowSpan={6} className="py-2 px-4 border">
                    <div className="flex items-center justify-center h-full">
                      <div className="rounded-full overflow-hidden w-16 h-16">
                        <img src="path/to/image.jpg" alt="Property" className="object-cover w-full h-full" />
                      </div>
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SimilarProperties;
