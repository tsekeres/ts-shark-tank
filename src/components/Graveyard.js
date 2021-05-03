import React from 'react';
import PropTypes from 'prop-types';
import GraveStone from './GraveStone';

const Graveyard = ({ floaters }) => {
  <>
  {floaters.map((student) => (
    <GraveStone key={student.id} student={student} />
  ))}
  </>
};

Graveyard.propTypes = {
  floaters: PropTypes.array.isRequired
};

export default Graveyard;
