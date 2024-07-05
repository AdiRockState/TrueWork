import React from 'react';
import styles from './AgentModal.module.css';
import CloseIcon from '/icons-1/Close-1.svg';
import MailIcon from '/icons-1/Mail.svg';
import CallIcon from '/icons-1/call.svg';
import WhatIcon2 from '/icons-1/whatsapp-1.svg';
import MeetingCard from './MeetingCard';

const AgentModal = ({ agent, meetings, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className={`bg-white p-4 w-1/3 rounded-lg relative ${styles.modalContent}`}>
        <button className={`absolute top-4 right-4 bg-none border-none cursor-pointer ${styles.closeButton}`} onClick={onClose}>
          <img src={CloseIcon} alt="Close" />
        </button>
        <div className="flex items-center justify-center">
          <img src={agent.image} alt="Agent" className={`w-12 h-12 rounded-full mr-4 ${styles.agentImage}`} />
          <div>
            <h2 className={styles.agentName}>{agent.name}</h2>
            <p className={styles.agentDesignation}>{agent.designation}</p>
          </div>
        </div>
        <div className="flex justify-between my-8">
          <div className="flex items-center w-1/2">
            <img src={MailIcon} className={`text-xl mr-2 ${styles.icon}`} alt="Mail" />
            <div>
              <p className={styles.contactText}>Mail</p>
              <p className={styles.contactDetail}>{agent.email}</p>
            </div>
          </div>
          <div className="flex items-center w-1/2">
            <img src={CallIcon} className={`text-xl mr-2 ${styles.icon}`} alt="Call" />
            <div>
              <p className={styles.contactText}>Call</p>
              <p className={styles.contactDetail}>{agent.phone}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mb-8">
          <button className={`border w-1/2 py-2 px-4 rounded-md ${styles.actionButton1}`}>Schedule Meeting</button>
          <button className={`border w-1/2 py-2 px-4 rounded-md flex items-center justify-center ${styles.actionButton2}`}>
            <img src={WhatIcon2} className={`text-xl mr-2 ${styles.icon}`} alt="WhatsApp" />WhatsApp
          </button>
        </div>
        <hr className={`border-t mb-4 ${styles.divider}`} />
        <h3 className={`mb-2 ${styles.subheading}`}>Upcoming Meetings ({agent.upcomingMeetings})</h3>
        <div className={`overflow-y-auto w-full ${styles.mh}`}>
          {meetings.map((meeting, index) => (
            <MeetingCard key={index} meeting={meeting} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AgentModal;
