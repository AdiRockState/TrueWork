// RequirementForm.js
import React from 'react';
import styles from './requirement.module.css';

const RequirementForm = ({ isActive, requirement, updateRequirement }) => {
  if (!isActive) return null;

  const handleToggleSelect = (name, value) => {
    const currentValue = requirement[name];
    if (Array.isArray(currentValue)) {
      if (currentValue.includes(value)) {
        updateRequirement(requirement.id, name, currentValue.filter(item => item !== value));
      } else {
        updateRequirement(requirement.id, name, [...currentValue, value]);
      }
    } else {
      updateRequirement(requirement.id, name, currentValue === value ? '' : value);
    }
  };

  const renderToggleButtons = (name, options, isMulti = false) => {
    return options.map(option => (
      <button
        key={option.value}
        type="button"
        className={`${styles.button} ${requirement[name].includes(option.value) ? styles.selected : ''}`}
        onClick={() => handleToggleSelect(name, option.value)}
      >
        {option.label}
      </button>
    ));
  };

  const budgetOptions = [
    { value: 'Less than ₹20 Lakhs', label: 'Less than ₹20 Lakhs' },
    { value: '₹20 Lakhs - ₹50 Lakhs', label: '₹20 Lakhs - ₹50 Lakhs' },
    { value: '₹50 Lakhs - 1 Crs.', label: '₹50 Lakhs - 1 Crs.' },
    { value: 'More Than 1 Crs.', label: 'More Than 1 Crs.' },
  ];

  const propertyTypeOptions = [
    { value: 'Plot', label: 'Plot' },
    { value: 'Apartment', label: 'Apartment' },
    { value: 'Farm Land', label: 'Farm Land' },
    { value: 'Villa', label: 'Villa' },
    { value: 'Row House', label: 'Row House' },
  ];

  const tenureOptions = Array.from({ length: 19 }, (v, k) => ({ value: (k + 2).toString(), label: (k + 2).toString() }));

  const investmentGoalOptions = [
    { value: 'Retirement Planning', label: 'Retirement Planning' },
    { value: 'Side Income', label: 'Side Income' },
    { value: 'Diversification', label: 'Diversification' },
    { value: 'Tax Saving', label: 'Tax Saving' },
    { value: 'Children Education', label: 'Children Education' },
    { value: 'Other', label: 'Other' },
  ];

  const builderCategoryOptions = [
    { value: 'Category A', label: 'Category A' },
    { value: 'Category B', label: 'Category B' },
    { value: 'Category C', label: 'Category C' },
    { value: 'Category D', label: 'Category D' },
  ];

  const investmentTimelineOptions = [
    { value: 'In This Week', label: 'In This Week' },
    { value: 'In This Month', label: 'In This Month' },
    { value: 'In Next 6 Month', label: 'In Next 6 Month' },
  ];

  const propertyStageOptions = [
    { value: 'Under Construction', label: 'Under Construction' },
    { value: 'EOI', label: 'EOI' },
    { value: 'In Next 6 Month', label: 'In Next 6 Month' },
  ];

  const investmentTypeOptions = [
    { value: 'Full', label: 'Full' },
    { value: 'Fractional', label: 'Fractional' },
  ];

  const loanRequiredOptions = [
    { value: 'Yes', label: 'Yes' },
    { value: 'No', label: 'No' },
  ];

  return (
    <div className={`bg-white p-6 shadow-md rounded ${styles.form}`}>
      <form className="grid gap-6 md:grid-cols-2">
        <div>
          <div className="mb-4">
            <label className="block text-gray-700">Budget:</label>
            <div className="flex flex-wrap">
              {renderToggleButtons('budget', budgetOptions)}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Property Type:</label>
            <div className="flex flex-wrap">
              {renderToggleButtons('propertyType', propertyTypeOptions, true)}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Tenure (Years):</label>
            <select 
              name="tenure"
              value={requirement.tenure}
              onChange={e => updateRequirement(requirement.id, e.target.name, e.target.value)}
              className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm ${styles.select}`}
            >
              {tenureOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Investment Goal:</label>
            <div className="flex flex-wrap">
              {renderToggleButtons('investmentGoal', investmentGoalOptions, true)}
            </div>
          </div>
          <div className="mb-10">
            <label className="block text-gray-700">Builder Category:</label>
            <div className="flex flex-wrap">
              {renderToggleButtons('builderCategory', builderCategoryOptions, true)}
            </div>
          </div>
        </div>
        <div>
          <div className="mb-4">
            <label className="block text-gray-700">Investment Timeline:</label>
            <div className="flex flex-wrap">
              {renderToggleButtons('investmentTimeline', investmentTimelineOptions)}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Property Stage:</label>
            <div className="flex flex-wrap">
              {renderToggleButtons('propertyStage', propertyStageOptions, true)}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Investment Type:</label>
            <div className="flex flex-wrap">
              {renderToggleButtons('investmentType', investmentTypeOptions, true)}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Micro Market:</label>
            <select 
              name="microMarket"
              value={requirement.microMarket}
              onChange={e => updateRequirement(requirement.id, e.target.name, e.target.value)}
              className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm ${styles.select}`}
            >
              {/* Add options here */}
              <option value="">All</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Loan Required:</label>
            <div className="flex flex-wrap">
              {renderToggleButtons('loanRequired', loanRequiredOptions)}
            </div>
          </div>
          <div className="mb-10">
            <label className="block text-gray-700">Any other thing you want to tell us:</label>
            <textarea 
              name="additionalInfo" 
              value={requirement.additionalInfo} 
              onChange={e => updateRequirement(requirement.id, e.target.name, e.target.value)} 
              maxLength="255"
              className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm ${styles.textarea}`}
            ></textarea>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RequirementForm;
