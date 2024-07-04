import React from 'react';

const AgentModal = () => {
  return (
    <div className="flex justify-center items-center fixed inset-0 bg-gray-900 bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
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
          <button className="text-gray-500 hover:text-gray-700">
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
        </div>
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12H8m0 0c-2.2 0-4 1.8-4 4v4c0 2.2 1.8 4 4 4h8c2.2 0 4-1.8 4-4v-4c0-2.2-1.8-4-4-4zM8 12V4c0-2.2 1.8-4 4-4s4 1.8 4 4v8"
              ></path>
            </svg>
            <span>agentname@truestate.in</span>
          </div>
          <div className="flex items-center mb-2">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 10v4a4 4 0 004 4h1a1 1 0 000-2H7a2 2 0 01-2-2v-4a2 2 0 012-2h1a1 1 0 100-2H7a4 4 0 00-4 4zM10 10a1 1 0 011 1v4a1 1 0 01-1 1H6a1 1 0 01-1-1v-4a1 1 0 011-1h4zm6 1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4a1 1 0 011-1h4zm6 0a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4a1 1 0 011-1h4zm-7-6a4 4 0 014 4v6h-4v-6a4 4 0 01-4-4zm0 4a4 4 0 00-4 4v6h4v-6a4 4 0 00-4-4zm0 4a4 4 0 004 4v6h4v-6a4 4 0 00-4-4zM5 7a4 4 0 01-4 4v6h4v-6a4 4 0 014-4zm12 0a4 4 0 01-4 4v6h4v-6a4 4 0 014-4z"
              ></path>
            </svg>
            <span>+91 8007890987</span>
          </div>
        </div>
        <div className="flex justify-between mb-4">
          <button className="flex-1 mr-2 bg-white text-green-700 border border-green-700 rounded-md py-2 px-4 hover:bg-green-100">
            Schedule Meeting
          </button>
          <button className="flex-1 ml-2 bg-green-700 text-white rounded-md py-2 px-4 hover:bg-green-800">
            <svg
              className="w-5 h-5 inline-block mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M2 10a1 1 0 011-1h4a1 1 0 110 2H4v4h2a1 1 0 110 2H3a1 1 0 01-1-1v-4zm17-1a1 1 0 00-1-1h-4a1 1 0 000 2h2v4h-2a1 1 0 000 2h3a1 1 0 001-1v-4zm-5-5a1 1 0 00-1-1H5a1 1 0 00-1 1v4a1 1 0 002 0V7h4a1 1 0 000-2H7V3a1 1 0 011-1h8a1 1 0 011 1v4h-2a1 1 0 110-2h2v4h-2a1 1 0 110 2h4a1 1 0 001-1V4zm-6 15a1 1 0 00-1-1h-4a1 1 0 100 2h2v4h-2a1 1 0 100 2h3a1 1 0 001-1v-4z"
              ></path>
            </svg>
            WhatsApp
          </button>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Upcoming Meetings (4)</h3>
          {Array(4)
            .fill()
            .map((_, index) => (
              <div
                key={index}
                className="flex items-center border border-gray-200 rounded-md p-4 mb-2"
              >
                <div className="bg-yellow-400 w-1.5 h-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">
                    Site Visit of &lt;Property Name&gt;
                  </h4>
                  <p className="text-sm text-gray-500">
                    24 Jan 2024, 02:30 AM
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AgentModal;
