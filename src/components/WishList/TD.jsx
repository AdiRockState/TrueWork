import React, { useState } from 'react';
import styles from './WishList.module.css';
import StarIcon from '/icons-1/State=Default.svg';
import StarIconA from '/icons-1/State=Filled.svg';
import CompIcon from '/icons-1/State=Default-1.svg';
import CompIconA from '/icons-1/State=Filled-1.svg';
import WhatsappIcon from '/icons-1/whatsapp.svg';
import RArrowIcon from '/icons-1/Arrow Right.svg';

const TD = ({ project }) => {
  const [A, setA] = useState({
    p1: false,
    p2: false,
  });

  const handleClick = (key) => {
    setA((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const getStatusClassName = (status) => {
    switch (status) {
      case 'Not Interested':
        return `${styles['status-cell']} ${styles['status-not-interested']}`;
      case 'Not Discussed':
        return `${styles['status-cell']} ${styles['status-not-discussed']}`;
      default:
        return `${styles['status-cell']} ${styles['status-default']}`;
    }
  };

  return (
    <>
      <td className={`px-3 py-4 border-b border-gray-200 text-sm ${styles['project-table-cell']}`}>{project.projectName}</td>
      <td className={`px-3 py-4 border-b border-gray-200 text-sm ${styles['project-table-cell']}`}>{project.location}</td>
      <td className={`px-3 py-4 border-b border-gray-200 text-sm ${styles['project-table-cell']}`}>{project.minInvest}</td>
      <td className={`px-3 py-4 border-b border-gray-200 text-sm ${styles['project-table-cell']}`}>{project.strategy}</td>
      <td className={`px-3 py-4 border-b border-gray-200 text-sm ${styles['project-table-cell']}`}>{project.invType}</td>
      <td className={`px-3 py-4 border-b border-gray-200 text-sm ${styles['project-table-cell']}`}>{project.tenure}</td>
      <td className={`px-3 py-4 border-b border-gray-200 text-sm ${styles['project-table-cell']}`}>{project.irr}</td>
      <td className={`px-3 py-4 border-b border-gray-200 text-sm ${styles['project-table-cell']}`}>{project.addedBy}</td>
      <td className={`px-3 py-4 border-b border-gray-200 text-sm`}><span className={`${getStatusClassName(project.status)} px-1 py-1`}>{project.status}</span></td>
      <td className={`px-3 py-4 border-b border-gray-200 text-sm flex space-x-2`}>
        <img src={A.p1 ? StarIconA : StarIcon} onClick={() => handleClick('p1')} alt="Star" />
        <img src={A.p2 ? CompIconA : CompIcon} onClick={() => handleClick('p2')} alt="Compare" />
        <img src={WhatsappIcon} alt="Whatsapp" />
        <img src={RArrowIcon} alt="Arrow Right" />
      </td>
    </>
  );
};

export default TD;
