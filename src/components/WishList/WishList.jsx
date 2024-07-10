import React, { useState, useEffect } from 'react';
import axios from 'axios'; // If using axios
import WishListTable from './WishListTable'; // Update with your actual component path

const WishList = () => {
  const projects = [
    {
      projectName: 'Project A',
      location: 'New York',
      stage: 'Pre-Construction',
      status: 'Not Interested',
      addedBy: 'John Doe',
      growth: 'High',
      value: '$1,000,000',
      pricePerSqft: '$500',
      irr: '10%',
      strategy: 'Long-term',
      tenure: '5 years',
      minInvest: '$50,000',
      availability: 'Limited',
      rera: 'Approved',
    },
    {
      projectName: 'Project B',
      location: 'Los Angeles',
      stage: 'Under Construction',
      status: 'Not Discussed',
      addedBy: 'Jane Smith',
      growth: 'Medium',
      value: '$800,000',
      pricePerSqft: '$450',
      irr: '8%',
      strategy: 'Short-term',
      tenure: '3 years',
      minInvest: '$30,000',
      availability: 'High',
      rera: 'Pending',
    },
  ];
  
  return (
    <div className="container mx-auto px-4">
      <WishListTable projects={projects} />
    </div>
  );
};

export default WishList;
