import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';

const TimePicker = ({ selectedTime, handleTimeChange }) => {
  const [time, setTime] = useState(selectedTime || dayjs().format('HH:mm'));

  useEffect(() => {
    if (selectedTime) {
      setTime(dayjs(selectedTime).format('HH:mm'));
    }
  }, [selectedTime]);

  const handleTime = (e) => {
    const newTime = e.target.value;
    console.log('newTime:', newTime);
    
    // Validate if newTime is in the format "HH:mm:ss"
    const timeRegex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/;
    // const timeRegex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
    if (timeRegex.test(newTime)) {
      setTime(newTime);
      handleTimeChange(newTime); // Pass the new time string
    } else {
      // Handle invalid time input here, such as showing an error message
      console.log('Invalid time format');
    }
  };
  
  
  
  
  
  return (
    <>
      <input
        type="time"
        step="1"
        value={time} // Use the 'time' state for the value
        onChange={handleTime}
        style={{
          padding: '0.8rem',
          paddingLeft: '8px',
          paddingRight: '8px',
          width: '20rem',
          margin: '0px 1rem',
          fontSize: '1.2rem',
          color: 'gray',
          border: '2px solid #e3e0e0',
        }}
      />
    </>
  );
};

export default TimePicker;
