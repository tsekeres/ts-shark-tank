import React from 'react';
import PropTypes from 'prop-types';
import GraveStone from './GraveStone';

const Graveyard = ({ sinkers }) => (
  <div className="card-container-2">
    {sinkers.map((students) => (
      <GraveStone key={students.id} students={students} />
    ))}
  </div>
);

Graveyard.propTypes = {
  sinkers: PropTypes.array.isRequired
};

export default Graveyard;
