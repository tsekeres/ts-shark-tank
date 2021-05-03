import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
} from 'reactstrap';

const GraveStone = ({ students }) => {
  return (
    <div>
      <Card>
        <CardImg
          top
          width="100%"
          src={`${students.image}`}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle tag="h5">R.I.P</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {`${students.firstName} ${students.lastName}`}
          </CardSubtitle>
        </CardBody>
      </Card>
    </div>
  );
};

GraveStone.propTypes = {
  students: PropTypes.array.isRequired
};

export default GraveStone;
