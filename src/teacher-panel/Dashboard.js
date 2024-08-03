import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from './Modal';

const Dashboard = () => {
  const [classrooms, setClassrooms] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedClassrooms = JSON.parse(localStorage.getItem('classrooms')) || [];
    setClassrooms(storedClassrooms);
  }, []);

  const addClassroom = (className, startTime, endTime) => {
    const newClassroom = {
      id: Date.now(),
      name: className,
      startTime: startTime,
      endTime: endTime,
    };
    const updatedClassrooms = [...classrooms, newClassroom];
    setClassrooms(updatedClassrooms);
    localStorage.setItem('classrooms', JSON.stringify(updatedClassrooms));
  };

  const openClassroom = (classroomId) => {
    navigate(`/classroom/${classroomId}`);
  };

  return (
    <div>
      <h1>Classroom Dashboard</h1>
      <button onClick={() => setIsModalOpen(true)}>+ Create Classroom</button>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '20px' }}>
        {classrooms.map((classroom) => (
          <div
            key={classroom.id}
            onClick={() => openClassroom(classroom.id)}
            style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '20px',
              width: '200px',
              cursor: 'pointer',
              boxShadow: '0 0 10px rgba(0,0,0,0.1)',
            }}
          >
            <h3>{classroom.name}</h3>
            <p>Start Time: {classroom.startTime}</p>
            <p>End Time: {classroom.endTime}</p>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <Modal
          onClose={() => setIsModalOpen(false)}
          onSave={(className, startTime, endTime) => {
            addClassroom(className, startTime, endTime);
            setIsModalOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default Dashboard;
