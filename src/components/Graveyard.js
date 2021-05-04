import React from 'react';
import PropTypes from 'prop-types';
import GraveStone from './GraveStone';

const Graveyard = ({ floaters }) => (
  <div>
    {floaters.map((students) => (
      <GraveStone key={students.id} students={students} />
    ))}
  </div>
);

Graveyard.propTypes = {
  floaters: PropTypes.array.isRequired
};

export default Graveyard;
