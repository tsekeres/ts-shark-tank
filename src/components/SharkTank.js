import React from 'react';
import PropTypes from 'prop-types';
import LiveStudent from './LiveStudent';

const SharkTank = ({ swimmers }) => {
  <>
    {swimmers.map((student) => (
      <LiveStudent key={student.id} student={student} />
    ))}
  </>;
};

SharkTank.PropTypes = {
  swimmers: PropTypes.array.isRequired
};

export default SharkTank;
