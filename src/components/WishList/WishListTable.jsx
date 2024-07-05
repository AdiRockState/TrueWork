import React from 'react';
import styles from './WishList.module.css'; // Import CSS module for styles
import TD from './TD';

const WishListTable = ({ projects }) => {
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
              <TD project={project}/>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WishListTable;
