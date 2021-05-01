import React from 'react';
import PropTypes from 'prop-types';

const SharkTank = ({ swimmers }) => {
  <ul>
    {swimmers.map((liveStudents) => (
      <li key={liveStudents.id}>{`${liveStudents.firstName}`}</li>
    ))}
  </ul>;
}

SharkTank.PropTypes = {
  swimmers: PropTypes.array.isRequired
}

export default SharkTank;
