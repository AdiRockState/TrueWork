import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import styles from './Schedule.module.css'

const ScheduleMeeting = () => {
  const [discussion, setDiscussion] = useState("");
  const [meetingType, setMeetingType] = useState("Call");
  const [selectedDay, setSelectedDay] = useState(0); // Start with the first day (today)
  const [selectedTime, setSelectedTime] = useState("02:00 pm");

  const times = [
    "11:00 am",
    "12:00 am",
    "01:00 pm",
    "02:00 pm",
    "03:00 pm",
    "04:00 pm",
    "05:00 pm",
    "06:00 pm",
    "07:00 pm",
    "08:00 pm",
    "09:00 pm",
    "10:00 pm",
  ];

  const today = dayjs();
  const days = Array.from({ length: 7 }, (_, i) => today.add(i, 'day'));

  const handleSchedule = async () => {
    const selectedDate = days[selectedDay].format("YYYY-MM-DD");
    const dayName = days[selectedDay].format("ddd");

    const response = await fetch('http://localhost:3000/schedule', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        day: dayName,
        date: selectedDate,
        time: selectedTime,
        discussion,
        meetingType,
      }),
    });

    if (response.ok) {
      alert('Schedule saved');
    } else {
      alert('Failed to save schedule');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
        <h2 className="text-xl font-bold mb-4">Schedule Meeting</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <p>
                What do you want to discuss?
            </p>
            <textarea
              className="w-full p-2 border rounded mb-4 flex-grow"
              placeholder="I want to discuss about tata's new project"
              value={discussion}
              onChange={(e) => setDiscussion(e.target.value)}
            />
            <div className="flex space-x-4">
              <button
                className={`p-2 border rounded ${meetingType === "Call" ? "bg-blue-500 text-white" : "bg-white"}`}
                onClick={() => setMeetingType("Call")}
              >
                Call
              </button>
              <button
                className={`p-2 border rounded ${meetingType === "Online Meeting" ? "bg-blue-500 text-white" : "bg-white"}`}
                onClick={() => setMeetingType("Online Meeting")}
              >
                Online Meeting
              </button>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="grid grid-cols-7 gap-2 mb-4">
              {days.map((day, index) => (
                <button
                  key={index}
                  className={`p-2 border rounded ${styles.button} ${selectedDay === index ? styles.day_selected : ""}`}
                  onClick={() => setSelectedDay(index)}
                >
                  {day.format("ddd DD")}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-4">
              {times.map((time, index) => (
                <button
                  key={index}
                  className={`p-2 border rounded ${styles.button} ${selectedTime === time ? styles.time_selected : ''}`}
                  onClick={() => setSelectedTime(time)}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            className="mt-4 bg-green-500 text-white p-2 rounded w-3/4 md:w-2/3 lg:w-1/2"
            onClick={handleSchedule}
          >
            Schedule
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScheduleMeeting;
