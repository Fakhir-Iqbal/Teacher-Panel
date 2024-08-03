import React, { useState } from 'react';

const AssignmentForm = ({ onClose, onSave }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [expiryDate, setExpiryDate] = useState('');

  const handleSubmit = () => {
    const newAssignment = {
      id: Date.now(),
      name,
      description,
      expiryDate
    };
    onSave(newAssignment);
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
        <h2>Add Assignment</h2>
        <input
          type="text"
          placeholder="Assignment Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ width: '100%', marginBottom: '10px', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ width: '100%', marginBottom: '10px', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
        />
        <input
          type="date"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          style={{ width: '100%', marginBottom: '10px', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
        />
        <button onClick={handleSubmit} style={{ marginRight: '10px', padding: '8px 12px', backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '4px' }}>OK</button>
        <button onClick={onClose} style={{ padding: '8px 12px', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '4px' }}>Cancel</button>
      </div>
    </div>
  );
};

export default AssignmentForm;
