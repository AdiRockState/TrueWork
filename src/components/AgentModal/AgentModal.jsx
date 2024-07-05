import React from 'react';

const AgentModal = () => {
  return (
    <div className="flex justify-center items-center fixed inset-0 bg-gray-900 bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
      <button className="text-gray-500 hover:text-gray-700 ml-90">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <img
              src="agent_photo_url"
              alt="Agent"
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <h2 className="text-lg font-semibold">Agent Name</h2>
              <p className="text-sm text-gray-500">Investment Manager</p>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <span>agentname@truestate.in</span>
          </div>
          <div className="flex items-center mb-2">
            <span>+91 8007890987</span>
          </div>
        </div>
      
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default AgentModal;
