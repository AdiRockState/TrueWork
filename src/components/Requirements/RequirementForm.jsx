import React from 'react';
import styles from './requirement.module.css';

const RequirementForm = ({ isActive, requirement, updateRequirement }) => {
  if (!isActive) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateRequirement(requirement.id, name, value);
  };

  return (
    <div className="bg-white p-6 shadow-md rounded">
      <h2 className="text-xl mb-4">Requirement Form</h2>
      <form>
        <div className="mb-4">
          <label htmlFor={`name-${requirement.id}`} className="block text-gray-700">Name:</label>
          <input 
            type="text" 
            id={`name-${requirement.id}`} 
            name="name" 
            value={requirement.name} 
            onChange={handleChange} 
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor={`description-${requirement.id}`} className="block text-gray-700">Description:</label>
          <textarea 
            id={`description-${requirement.id}`} 
            name="description" 
            value={requirement.description} 
            onChange={handleChange} 
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          ></textarea>
        </div>
        {/* Add other fields as needed */}
      </form>
    </div>
  );
};

export default RequirementForm;
