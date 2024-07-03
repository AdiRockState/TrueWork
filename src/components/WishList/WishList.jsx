import React, { useState } from 'react';
import WishListTable from './WishListTable';

const WishList = () => {
  const [projects, setProjects] = useState([{
    projectName: 'Project A',
    location: 'New York',
    minInvest: '$1000',
    strategy: 'Growth',
    invType: 'Equity',
    tenure: '2 years',
    irr: '15%',
    addedBy: 'John Doe',
    status: 'Not Discussed'
  },
  {
    projectName: 'Project B',
    location: 'New York',
    minInvest: '$1000',
    strategy: 'Growth',
    invType: 'Equity',
    tenure: '2 years',
    irr: '15%',
    addedBy: 'John Doe',
    status: 'EOI Collection'
  },
  {
    projectName: 'Project C',
    location: 'Los Angeles',
    minInvest: '$5000',
    strategy: 'Value',
    invType: 'Debt',
    tenure: '3 years',
    irr: '10%',
    addedBy: 'Jane Smith',
    status: 'Not Interested'
  }]);

  return (
    <div className="container mx-auto px-4">
      <WishListTable projects={projects} />
    </div>
  );
};

export default WishList;
