import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Row className="bg-dark text-white mr-0">
        <Col className="text-center py-3">
          Copyright &copy; News Store
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
