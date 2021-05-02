import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import './App.scss';
import { livingStudents, dearlyBeloved, followTheLight } from '../helpers/data/studentsData';
import SharkTank from '../components/SharkTank';

function App() {
  const [swimmers, setSwimmers] = useState([]);
  const [floaters, setFloaters] = useState([]);

  useEffect(() => {
    setSwimmers(livingStudents());
    setFloaters(dearlyBeloved());
  }, []);

  const sharkAttack = () => {
    const [living, dead] = followTheLight();
    setSwimmers(living);
    setFloaters(dead);
    followTheLight();
  };

  return (
    <div className='App'>
      <Button
        color='danger'
        onClick={sharkAttack}
        disabled={swimmers.length <= 0}
      >
        Chum Time
      </Button>
      <h2>Shark Tank</h2>
      <hr></hr>
      <h2>Swimmers</h2>
      <SharkTank swimmers={swimmers} />
      <ul>
        {swimmers.map((liveStudent) => (
          <li key={liveStudent.id}>
            {`${liveStudent.firstName} ${liveStudent.lastName}`}
          </li>
        ))}
      </ul>
      <h2>Floaters</h2>
      <Graveyard floaters={floaters} />
      <ul>
        {floaters.map((liveStudent) => (
          <li key={liveStudent.id}>
            {`${liveStudent.firstName} ${liveStudent.lastName}`}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
