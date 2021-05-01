import React, { useEffect, useState } from 'react';
import './App.scss';
import { livingStudents, dearlyBeloved, students } from '../helpers/data/studentsData';

function App() {
  const [swimmers, setSwimmers] = useState([]);
  const [floaters, setFloaters] = useState([]);

  useEffect(() => {
    setSwimmers(livingStudents());
    setFloaters(dearlyBeloved());
  }, []);

  console.warn(students, swimmers, floaters);

  return (
    <div className='App'>
     <h2>Shark Tank</h2>
    </div>
  );
}

export default App;
