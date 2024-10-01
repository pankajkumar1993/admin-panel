import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './ChatGPTLogin1.scss';

const ChatGPTLogin1: React.FC = () => {
  return (
    <Container fluid className="login-container">
      <Row className="login-box">
        {/* Left section - Login Form */}
        <Col md={6} className="login-form">
          <div className="brand-logo">Diprella</div>
          <h2>Login to Your Account</h2>
          <p>Login using social networks</p>
          <div className="social-login-buttons">
            <Button variant="outline-dark" className="mr-2"><i className="fab fa-facebook-f"></i> f</Button>
            <Button variant="outline-dark" className="mr-2"><i className="fab fa-google"></i> G+</Button>
            <Button variant="outline-dark"><i className="fab fa-linkedin"></i> in</Button>
          </div>
          <hr />
          <p>OR</p>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" />
              <i className="eye-icon">👁️</i> {/* Placeholder icon */}
            </Form.Group>

            <Button variant="success" type="submit" className="login-btn">
              Sign In
            </Button>
          </Form>
        </Col>

        {/* Right section - Signup Info */}
        <Col md={6} className="signup-info">
          <h3>New Here?</h3>
          <p>Sign up and discover a great amount of new opportunities!</p>
          <Button variant="outline-light" className="signup-btn">
            Sign Up
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ChatGPTLogin1;
