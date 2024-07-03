import React from 'react';
import TutorialCard from './TutorialCard';

const HelpModal = ({ closeModal }) => {
  return (
    <div className="fixed inset-y-0 top-28 left-52 flex items-center justify-center z-30 h-3/4">
      <div className="bg-white rounded-lg shadow-lg p-4 w-3/4 relative pb-0">
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
        >
          &times;
        </button>
        <div className="overflow-y-auto">
          <h2 className="text-xl font-bold mb-4">Help</h2>
          <h4 className="text-l font-semibold mb-4">Tutorial</h4>
          <div className="space-y-4">
            {[...Array(4)].map((_, index) => (
              <TutorialCard key={index} />
            ))}
          </div>
        </div>
        <div className='p-4 items-left pb-0'>
          <a href="#" className="items-left text-500 hover:underline">
            <div className="flex items-left rounded-lg h-1/6 mb-4">
              <div className="flex items-center space-x-2 rounded-lg h-1/6 mb-4">
              <object data="/icons-1/tnc.svg"> </object>
                <h3 className="text-s font-semibold">Terms and Conditions</h3>
                <object data="/icons-1/Arrow Right.svg" className='right-4 absolute'> </object>
              </div>
            </div>
            
          </a>
          <a href="#" className="items-left text-500 hover:underline">
          <div className="flex items-left rounded-lg h-1/6 mb-4">
              <div className="flex items-center space-x-2 rounded-lg h-1/6 mb-4">
              <object data="/icons-1/lock.svg"> </object>
                <h3 className="text-s font-semibold">Privacy Policy</h3>
                <object data="/icons-1/Arrow Right.svg" className='right-4 absolute'> </object>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HelpModal;
