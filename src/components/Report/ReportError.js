import React from 'react';
import { Alert } from 'react-bootstrap';
import { ExclamationTriangleFill } from 'react-bootstrap-icons';

export default function ReportError({ message }) {
  return (
    <>
      <br />
      <br />
      <Alert variant="danger">
        <ExclamationTriangleFill size={ 32 } style={{ marginRight: '10px' }}/>
        {message}
      </Alert>
    </>
  );
};
