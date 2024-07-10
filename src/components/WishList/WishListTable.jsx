import React from 'react';
import styles from './WishList.module.css'; // Import CSS module for styles
import TD from './TD';

const WishListTable = ({ projects }) => {
  return (
    <div className={`${styles['table-container']}`}>
      <table className={`bg-white border border-gray-200 ${styles.table_x}`}>
        <thead>
          <tr>
            <th className={`px-4 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold tracking-wider ${styles['project-table-header']} ${styles['fixed-column']} ${styles['first-column']}`}>Project Name</th>
            <th className={`px-4 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold tracking-wider ${styles['project-table-header']}`}>Location</th>
            <th className={`px-4 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold tracking-wider ${styles['project-table-header']}`}>Stage</th>
            <th className={`px-4 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold tracking-wider ${styles['project-table-header']}`}>Status</th>
            <th className={`px-4 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold tracking-wider ${styles['project-table-header']}`}>Added by</th>
            <th className={`px-4 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold tracking-wider ${styles['project-table-header']}`}>Growth</th>
            <th className={`px-4 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold tracking-wider ${styles['project-table-header']}`}>Value</th>
            <th className={`px-4 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold tracking-wider ${styles['project-table-header']}`}>Price/Sqft</th>
            <th className={`px-4 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold tracking-wider ${styles['project-table-header']}`}>IRR</th>
            <th className={`px-4 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold tracking-wider ${styles['project-table-header']}`}>Strategy</th>
            <th className={`px-4 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold tracking-wider ${styles['project-table-header']}`}>Tenure</th>
            <th className={`px-4 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold tracking-wider ${styles['project-table-header']}`}>Min. Invest</th>
            <th className={`px-4 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold tracking-wider ${styles['project-table-header']}`}>Availability</th>
            <th className={`px-4 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold tracking-wider ${styles['project-table-header']}`}>RERA</th>
            <th className={`px-4 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold tracking-wider ${styles['project-table-header']} ${styles['fixed-column']} ${styles['last-column']}`}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={index}>
              <TD project={project} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WishListTable;
