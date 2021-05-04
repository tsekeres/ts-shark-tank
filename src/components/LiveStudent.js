import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardImg, CardBody, CardTitle, CardSubtitle
} from 'reactstrap';

const LiveStudent = ({ students }) => (
  <Card>
    <CardImg
      top
      width='100%'
      src={`${students.image}`}
      alt='Card image cap'
    />
    <CardBody>
      <CardTitle tag='h5'>E-14<br></br>Swimmers</CardTitle>
      <CardSubtitle tag='h6' className='mb-2 text-muted'>
        {`${students.firstName} ${students.lastName}`}
      </CardSubtitle>
    </CardBody>
  </Card>
);

LiveStudent.propTypes = {
  students: PropTypes.object.isRequired
};

export default LiveStudent;
