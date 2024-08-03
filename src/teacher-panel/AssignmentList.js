// AssignmentList.js
import React from 'react';

const AssignmentList = ({ assignments }) => {
  return (
    <div>
      <h2>Assignments List</h2>
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        {assignments.map((assignment) => (
          <li key={assignment.id} style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
            <strong>{assignment.name}</strong>
            <p>{assignment.description}</p>
            <p><em>Expiry Date: {assignment.expiryDate}</em></p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AssignmentList;
