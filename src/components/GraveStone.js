import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
} from 'reactstrap';

const GraveStone = ({ students }) => (
  <Card>
    <CardImg
      top
      width="100%"
      src={`${students.image}`}
      alt="Card image cap"
    />
    <CardBody>
      <CardTitle tag="h6">R.I.P</CardTitle>
      <CardSubtitle tag="h6" className="text-muted">
        {`${students.firstName} ${students.lastName}`}
      </CardSubtitle>
    </CardBody>
  </Card>
);

GraveStone.propTypes = {
  students: PropTypes.object.isRequired
};

export default GraveStone;
