import React, { useState } from 'react';

const InvestmentCalculator = ({ configurations, strategies, sliders }) => {
  const [selectedConfig, setSelectedConfig] = useState(configurations[0].value);
  const [selectedStrategy, setSelectedStrategy] = useState(strategies[0].value);
  const [sliderValues, setSliderValues] = useState(sliders.reduce((acc, slider) => ({ ...acc, [slider.name]: slider.default }), {}));

  const handleSliderChange = (name, value) => {
    setSliderValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="p-4 bg-white shadow rounded">
      <h2 className="text-xl font-semibold mb-2">Investment Calculator</h2>
      <div className="mb-4">
        {configurations.map((config) => (
          <button
            key={config.value}
            className={`py-2 px-4 mr-2 rounded ${selectedConfig === config.value ? 'bg-gray-800 text-white' : 'bg-gray-200'}`}
            onClick={() => setSelectedConfig(config.value)}
          >
            {config.label}
          </button>
        ))}
      </div>
      <div className="mb-4">
        {strategies.map((strategy) => (
          <button
            key={strategy.value}
            className={`py-2 px-4 mr-2 rounded ${selectedStrategy === strategy.value ? 'bg-gray-800 text-white' : 'bg-gray-200'}`}
            onClick={() => setSelectedStrategy(strategy.value)}
          >
            {strategy.label}
          </button>
        ))}
      </div>
      {sliders.map((slider) => (
        <div key={slider.name} className="mb-4">
          <label className="block mb-1">{slider.label}</label>
          <input
            type="range"
            min={slider.min}
            max={slider.max}
            value={sliderValues[slider.name]}
            onChange={(e) => handleSliderChange(slider.name, e.target.value)}
            className="w-full"
          />
          <div className="text-right">{sliderValues[slider.name]}</div>
        </div>
      ))}
      <button className="w-full py-2 px-4 bg-gray-800 text-white rounded mt-4">View Detail Report</button>
    </div>
  );
};

export default InvestmentCalculator;
