
import React, { useState, useEffect } from 'react';
import AssignmentForm from './AssignmentForm';
import AssignmentList from './AssignmentList';

const ClassroomPage = () => {
  const [assignments, setAssignments] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    // Load assignments from local storage when the component mounts
    const storedAssignments = JSON.parse(localStorage.getItem('assignments')) || [];
    setAssignments(storedAssignments);
  }, []);

  const handleAddAssignment = (newAssignment) => {
    const updatedAssignments = [...assignments, newAssignment];
    setAssignments(updatedAssignments);
    localStorage.setItem('assignments', JSON.stringify(updatedAssignments));
    setShowForm(false);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Classroom</h1>
      <button 
        onClick={() => setShowForm(true)} 
        style={{ marginBottom: '20px', padding: '10px 20px', backgroundColor: '#007BFF', color: 'white', border: 'none', borderRadius: '4px' }}
      >
        + Add Assignment
      </button>

      {showForm && (
        <AssignmentForm onClose={() => setShowForm(false)} onSave={handleAddAssignment} />
      )}

      <AssignmentList assignments={assignments} />
    </div>
  );
};

export default ClassroomPage;
