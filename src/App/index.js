import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import { livingStudents, dearlyBeloved, followTheLight } from '../helpers/data/studentsData';
import SharkTank from '../components/SharkTank';
import Graveyard from '../components/Graveyard';
import '../styles/index.scss';

function App() {
  const [swimmers, setSwimmers] = useState([]);
  const [sinkers, setSinkers] = useState([]);

  useEffect(() => {
    setSwimmers(livingStudents());
    setSinkers(dearlyBeloved());
  }, []);

  const sharkAttack = () => {
    const [living, dead] = followTheLight();
    setSwimmers(living);
    setSinkers(dead);
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
      <SharkTank swimmers={swimmers} />
      <hr></hr>
      <h2>Sinkers</h2>
      <hr></hr>
      <Graveyard sinkers={sinkers} />
    </div>
  );
}

export default App;
