import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <Container className="footer">
      <Row>
        <Col xs={12}>
          <p>&copy; 2023 Admin Panel</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;