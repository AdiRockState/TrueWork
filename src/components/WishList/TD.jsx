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
      <td className={`px-4 py-3 border-b border-gray-200 text-sm ${styles['project-table-cell']} ${styles['fixed-column']} ${styles['first-column']}`}>{project.projectName}</td>
      <td className={`px-4 py-3 border-b border-gray-200 text-sm ${styles['project-table-cell']}`}>{project.location}</td>
      <td className={`px-4 py-3 border-b border-gray-200 text-sm ${styles['project-table-cell']}`}>{project.stage}</td>
      <td className={`px-4 py-3 border-b border-gray-200 text-sm ${styles['project-table-cell']}`}>
        <span className={`${getStatusClassName(project.status)} px-2 py-1 rounded-md`}>{project.status}</span>
      </td>
      <td className={`px-4 py-3 border-b border-gray-200 text-sm ${styles['project-table-cell']}`}>{project.addedBy}</td>
      <td className={`px-4 py-3 border-b border-gray-200 text-sm ${styles['project-table-cell']}`}>{project.growth}</td>
      <td className={`px-4 py-3 border-b border-gray-200 text-sm ${styles['project-table-cell']}`}>{project.value}</td>
      <td className={`px-4 py-3 border-b border-gray-200 text-sm ${styles['project-table-cell']}`}>{project.pricePerSqft}</td>
      <td className={`px-4 py-3 border-b border-gray-200 text-sm ${styles['project-table-cell']}`}>{project.irr}</td>
      <td className={`px-4 py-3 border-b border-gray-200 text-sm ${styles['project-table-cell']}`}>{project.strategy}</td>
      <td className={`px-4 py-3 border-b border-gray-200 text-sm ${styles['project-table-cell']}`}>{project.tenure}</td>
      <td className={`px-4 py-3 border-b border-gray-200 text-sm ${styles['project-table-cell']}`}>{project.minInvest}</td>
      <td className={`px-4 py-3 border-b border-gray-200 text-sm ${styles['project-table-cell']}`}>{project.availability}</td>
      <td className={`px-4 py-3 border-b border-gray-200 text-sm ${styles['project-table-cell']}`}>{project.rera}</td>
      <td className={`flex px-4 py-3 border-b border-gray-200 text-sm ${styles['project-table-cell']} ${styles['fixed-column']} ${styles['last-column']}`}>
        <img src={A.p1 ? StarIconA : StarIcon} onClick={() => handleClick('p1')} alt="Star" className="cursor-pointer pr-2" />
        <img src={A.p2 ? CompIconA : CompIcon} onClick={() => handleClick('p2')} alt="Compare" className="cursor-pointer pr-2" />
        <img src={RArrowIcon} alt="Arrow Right" className="cursor-pointer" />
      </td>
    </>
  );
};

export default TD;
