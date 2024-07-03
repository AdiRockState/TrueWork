import React from 'react';
import helpdef from '/help_def.png'

const TutorialCard = () => {
  return (
    <div className="flex items-center p-4 border rounded-lg shadow-sm h-1/6">
      <img src={helpdef} alt="TruEstate" className="w-12 h-12 mr-4" />
      <div>
        <h3 className="text-s font-semibold">How to use TruEstate?</h3>
        <p className="text-gray-500 text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero.</p>
      </div>
    </div>
  );
};

export default TutorialCard;
