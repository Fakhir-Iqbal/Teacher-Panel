// ClassroomPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ClassroomPage = () => {
  const { classroomId } = useParams();
  const [classroom, setClassroom] = useState(null);

  useEffect(() => {
    const storedClassrooms = JSON.parse(localStorage.getItem('classrooms')) || [];
    const foundClassroom = storedClassrooms.find(cls => cls.id === parseInt(classroomId));
    setClassroom(foundClassroom);
  }, [classroomId]);

  if (!classroom) return <div>Classroom not found!</div>;

  return (
    <div>
      <h1>Classroom: {classroom.name}</h1>
    </div>
  );
};

export default ClassroomPage;
