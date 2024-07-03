import React, { useState } from 'react';
import RequirementForm from './RequirementForm';
import tickIcon from '/icons-1/WhiteTick.svg';
import deleteIcon from '/icons-1/trash.svg';
import styles from './requirement.module.css';

const Requirement = () => {
  const [requirements, setRequirements] = useState([{
    id: 1,
    budget: '',
    propertyType: [],
    tenure: '',
    investmentGoal: [],
    builderCategory: [],
    investmentTimeline: '',
    propertyStage: [],
    investmentType: [],
    microMarket: '',
    loanRequired: '',
    additionalInfo: ''
  }]);

  const [activeTab, setActiveTab] = useState(1);

  const addRequirement = () => {
    const newId = requirements.length + 1;
    setRequirements([...requirements, {
      id: newId,
      budget: '',
      propertyType: [],
      tenure: '',
      investmentGoal: [],
      builderCategory: [],
      investmentTimeline: '',
      propertyStage: [],
      investmentType: [],
      microMarket: '',
      loanRequired: '',
      additionalInfo: ''
    }]);
    setActiveTab(newId);
  };

  const deleteRequirement = () => {
    if (requirements.length === 1) return;
    const updatedRequirements = requirements
      .filter(req => req.id !== activeTab)
      .map((req, index) => ({ ...req, id: index + 1 }));

    setRequirements(updatedRequirements);
    setActiveTab(updatedRequirements.length > 0 ? updatedRequirements[0].id : null);
  };

  const saveRequirements = () => {
    console.log('Requirements saved:', requirements);
  };

  const updateRequirement = (id, field, value) => {
    const updatedRequirements = requirements.map(req =>
      req.id === id ? { ...req, [field]: value } : req
    );
    setRequirements(updatedRequirements);
  };

  return (
    <div className="flex flex-col h-screen">
      <div className={`${styles.tabs} px-4`}>
        {requirements.map(req => (
          <button
            key={req.id}
            className={`${styles.tabButton} ${activeTab === req.id ? styles.activeTab : ''}`}
            onClick={() => setActiveTab(req.id)}
          >
            Requirement {req.id}
          </button>
        ))}
        <button className={`${styles.tabButton}`} onClick={addRequirement}>
          <span className={`${styles.addButton} px-2 py-1`}>+</span>
        </button>
      </div>
      <div className="flex-grow overflow-y-auto p-4">
        {requirements.map(req => (
          <RequirementForm
            key={req.id}
            isActive={activeTab === req.id}
            requirement={req}
            updateRequirement={updateRequirement}
          />
        ))}
      </div>
      <div className={styles.bottomPanel}>
        <button className={`${styles.saveButton} flex items-center`} onClick={saveRequirements}>
          <img src={tickIcon} alt="Tick Icon" className="w-4 h-4" /> 
          <span className="ml-2">Save</span>
        </button>
        <button className={`${styles.deleteButton} flex items-center`} onClick={deleteRequirement}>
          <img src={deleteIcon} alt="Delete Icon" className="w-4 h-4" /> 
          <span className="ml-2">Delete</span>
        </button>
      </div>
    </div>
  );
};

export default Requirement;
