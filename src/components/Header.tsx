// Header.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Header = () => {
  return (
    <Container className="header">
      <Row>
        <Col xs={12}>
          <h1>Admin Panel</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;