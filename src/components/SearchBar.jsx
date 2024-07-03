import React, { useState } from 'react';

export function SearchBar({ onSearch, onFilterChange, minInvestment, setMinInvestment, filters }) {
  const [searchTerm, setSearchTerm] = useState(filters.searchTerm);
  const [investmentType, setInvestmentType] = useState(filters.investmentType);
  const [strategy, setStrategy] = useState(filters.strategy);
  const [tenure, setTenure] = useState(filters.tenure);

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleFilterChange = (event) => {
    const { name, value } = event.target;

    if (name === 'investmentType') {
      setInvestmentType(value);
    } else if (name === 'strategy') {
      setStrategy(value);
    } else if (name === 'tenure') {
      setTenure(value);
    }

    onFilterChange(name, value);
  };

  const handleSliderChange = (event) => {
    const newValue = Number(event.target.value);
    setMinInvestment(newValue);
    onFilterChange('minInvestment', newValue);
  };

  const handleClearFilters = () => {
    setSearchTerm('');
    setInvestmentType('');
    setStrategy('');
    setTenure('');
    setMinInvestment(0);

    onSearch('');
    onFilterChange('investmentType', '');
    onFilterChange('strategy', '');
    onFilterChange('tenure', '');
    onFilterChange('minInvestment', 0);
  };

  return (
    <div className="flex items-center p-4 bg-white border-b-2 border-gray-300">
      <input
        type="text"
        placeholder="Search Project"
        value={searchTerm}
        onChange={handleSearchChange}
        className="mr-4 p-2 border border-gray-300 rounded"
      />

      <div className="mr-4">
        <label className="block mb-1">Investment Type</label>
        <select
          name="investmentType"
          value={investmentType}
          onChange={handleFilterChange}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="">None</option>
          <option value="Fractional">Fractional</option>
          <option value="Full">Full</option>
        </select>
      </div>

      <div className="mr-4">
        <label className="block mb-1">Strategy</label>
        <select
          name="strategy"
          value={strategy}
          onChange={handleFilterChange}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="">None</option>
          <option value="Buy to Sell">Buy to Sell</option>
          <option value="Buy to Rent">Buy to Rent</option>
        </select>
      </div>

      <div className="mr-4 w-48">
        <label className="block mb-1">Min Investment</label>
        <input
          type="range"
          value={minInvestment}
          onChange={handleSliderChange}
          min={0}
          max={100000000}
          className="w-full"
        />
        <div className="text-center">{minInvestment}</div>
      </div>

      <div className="mr-4">
        <label className="block mb-1">Tenure</label>
        <select
          name="tenure"
          value={tenure}
          onChange={handleFilterChange}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="">None</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>5+</option>
        </select>
      </div>

      <button
        onClick={handleClearFilters}
        className="bg-red-500 text-white p-2 rounded"
      >
        Clear
      </button>
    </div>
  );
}
