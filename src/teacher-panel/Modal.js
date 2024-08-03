// Modal.js
import React, { useState } from 'react';

const Modal = ({ onClose, onSave }) => {
  const [className, setClassName] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const handleSave = () => {
    if (className && startTime && endTime) {
      onSave(className, startTime, endTime);
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center'
    }}>
      <div style={{
        backgroundColor: 'white', padding: '20px', borderRadius: '8px',
        width: '300px', boxShadow: '0 0 10px rgba(0,0,0,0.25)'
      }}>
        <h2>Create Classroom</h2>
        <input
          type="text"
          placeholder="Classroom Name"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
          style={{ width: '100%', marginBottom: '10px', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
        />
        <input
          type="time"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          style={{ width: '100%', marginBottom: '10px', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
        />
        <input
          type="time"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          style={{ width: '100%', marginBottom: '10px', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
        />
        <button onClick={handleSave} style={{ marginRight: '10px', padding: '8px 12px', backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '4px' }}>Save</button>
        <button onClick={onClose} style={{ padding: '8px 12px', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '4px' }}>Cancel</button>
      </div>
    </div>
  );
};

export default Modal;
