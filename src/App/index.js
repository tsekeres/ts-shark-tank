import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import { livingStudents, dearlyBeloved, followTheLight } from '../helpers/data/studentsData';
import SharkTank from '../components/SharkTank';
import Graveyard from '../components/Graveyard';
import './App.scss';

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
  };

  return (
    <div className="App">
      <h2>Shark Tank</h2>
      <br></br>
      <Button
        color="danger"
        onClick={sharkAttack}
        disabled={swimmers.length <= 0}
      >
        Chum Time
      </Button>
      <hr></hr>
      <h2>Swimmers</h2>
      <hr></hr>
      <div className="card-container">
        <SharkTank swimmers={swimmers} />
      </div>
      <hr></hr>
      <h2>Floaters</h2>
      <hr></hr>
      <div className="card-container-2">
        <Graveyard floaters={floaters} />
      </div>
    </div>
  );
}

export default App;
