import React, { useState } from 'react';
import styles from './WishList.module.css'; // Import CSS module for styles
import StarIcon from '/icons-1/State=Default.svg';
import StarIconA from '/icons-1/State=Filled.svg';
import CompIcon from '/icons-1/State=Default-1.svg';
import CompIconA from '/icons-1/State=Filled-1.svg';
import WhatsappIcon from '/icons-1/whatsapp.svg';
import RArrowIcon from '/icons-1/Arrow Right.svg';

const WishListTable = ({ projects }) => {
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
    <div className={`${styles['table-container']} overflow-x-auto`}>
      <table className={`min-w-full bg-white border border-gray-200`}>
        <thead>
          <tr>
            <th className={`px-3 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs font-semibold tracking-wider ${styles['project-table-header']}`}>Project Name</th>
            <th className={`px-3 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs font-semibold tracking-wider ${styles['project-table-header']}`}>Location</th>
            <th className={`px-3 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs font-semibold tracking-wider ${styles['project-table-header']}`}>Min. Invest</th>
            <th className={`px-3 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs font-semibold tracking-wider ${styles['project-table-header']}`}>Strategy</th>
            <th className={`px-3 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs font-semibold tracking-wider ${styles['project-table-header']}`}>Inv. Type</th>
            <th className={`px-3 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs font-semibold tracking-wider ${styles['project-table-header']}`}>Tenure</th>
            <th className={`px-3 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs font-semibold tracking-wider ${styles['project-table-header']}`}>IRR</th>
            <th className={`px-3 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs font-semibold tracking-wider ${styles['project-table-header']}`}>Added by</th>
            <th className={`px-3 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs font-semibold tracking-wider ${styles['project-table-header']}`}>Status</th>
            <th className={`px-3 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs font-semibold tracking-wider ${styles['project-table-header']}`}>Action</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={index}>
              <td className={`px-3 py-4 border-b border-gray-200 text-sm ${styles['project-table-cell']}`}>{project.projectName}</td>
              <td className={`px-3 py-4 border-b border-gray-200 text-sm ${styles['project-table-cell-2']}`}>{project.location}</td>
              <td className={`px-3 py-4 border-b border-gray-200 text-sm ${styles['project-table-cell']}`}>{project.minInvest}</td>
              <td className={`px-3 py-4 border-b border-gray-200 text-sm ${styles['project-table-cell-2']}`}>{project.strategy}</td>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WishListTable;
