// AssignmentSection.js
import React, { useState } from 'react';
import AssignmentForm from './AssignmentForm';

const AssignmentSection = ({ assignments, addAssignment }) => {
  const [showForm, setShowForm] = useState(false);

  const handleAddAssignment = (newAssignment) => {
    addAssignment(newAssignment);
    setShowForm(false);
  };

  const categorizedAssignments = {
    pending: assignments.filter(a => a.status === 'Pending'),
    expired: assignments.filter(a => a.status === 'Expired'),
    scheduled: assignments.filter(a => a.status === 'Scheduled')
  };

  return (
    <div style={{ width: '45%' }}>
      <h2>Assignments</h2>
      <button onClick={() => setShowForm(true)}>+ Add Assignment</button>

      {Object.keys(categorizedAssignments).map(category => (
        <div key={category}>
          <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
          {categorizedAssignments[category].map(a => (
            <div key={a.id}>{a.title} - {category === 'scheduled' ? a.scheduleUploadTime : a.dueDate}</div>
          ))}
        </div>
      ))}

      {showForm && (
        <AssignmentForm
          onClose={() => setShowForm(false)}
          onSave={handleAddAssignment}
        />
      )}
    </div>
  );
};

export default AssignmentSection;
