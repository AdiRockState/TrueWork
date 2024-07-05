import React from 'react';
import styles from './AgentModal.module.css';
import CalendarIcon from '/icons-1/Calendar.svg';

const MeetingCard = ({ meeting }) => {
  return (
    <div className={`flex items-center w-full mt-4 bg-white border rounded-lg mb-2 ${styles.meetingCard}`}>
      <div className={`w-2 h-24 mr-4 ${styles.yellow}`}></div>
      <div className="p-4">
        <p className={styles.meetingTitle}>{meeting.action}</p>
        <p className={`flex items-center mt-2 ${styles.meetingDate}`}>
          <img src={CalendarIcon} className="mr-2" alt="Calendar Icon" />
          {meeting.date}, {meeting.time}
        </p>
      </div>
    </div>
  );
};

export default MeetingCard;
