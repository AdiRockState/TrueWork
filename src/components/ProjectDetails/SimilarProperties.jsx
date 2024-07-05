import React, { useState } from 'react';

const SimilarProperties = ({ properties }) => {
  const [data, setData] = useState(properties);
  const [search, setSearch] = useState('');

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearch(searchTerm);
    setData(
      properties.filter(property =>
        property.name.toLowerCase().includes(searchTerm)
      )
    );
  };

  return (
    <div className="p-4 bg-white shadow rounded">
      <h2 className="text-xl font-semibold mb-2">Similar Properties</h2>
      <div className="overflow-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="py-2 px-4 border">Name</th>
              <th className="py-2 px-4 border">Location</th>
              <th className="py-2 px-4 border">Price</th>
              <th className="py-2 px-4 border">Area</th>
            </tr>
          </thead>
          <tbody>
            {data.map((property, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border">{property.name}</td>
                <td className="py-2 px-4 border">{property.location}</td>
                <td className="py-2 px-4 border">{property.price}</td>
                <td className="py-2 px-4 border">{property.area}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <input
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="Search properties..."
        className="mt-4 p-2 border w-full rounded"
      />
    </div>
  );
};

export default SimilarProperties;
