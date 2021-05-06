import React from 'react';
import PropTypes from 'prop-types';
import LiveStudent from './LiveStudent';

const SharkTank = ({ swimmers }) => (
  <div className="card-container">
    {swimmers.map((students) => (
      <LiveStudent key={students.id} students={students} />
    ))}
  </div>
);

SharkTank.propTypes = {
  swimmers: PropTypes.array.isRequired
};

export default SharkTank;
