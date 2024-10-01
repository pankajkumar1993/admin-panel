// src/Login.js
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Login1() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<any>(null);

  const handleSubmit = (event:any) => {
    event.preventDefault();
    // Add your login logic here
    if (username === '' || password === '') {
      setError('Please enter both username and password');
    } else {
      // Call your API to login
      console.log('Login successful');
    }
  };

  return (
    <Container fluid className="login-container h-100">
      <Row className="login-row h-100">
        <Col xs={12} md={6} className="login-form-col h-100">
          <div className="login-form">
            <h2>Login to Your Account</h2>
            <div className="social-login">
              <Button variant="primary" className="facebook-btn">
                <i className="fab fa-facebook"></i> Facebook
              </Button>
              <Button variant="danger" className="google-btn">
                <i className="fab fa-google"></i> Google
              </Button>
            </div>
            <div className="or">
              <span>OR</span>
            </div>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="username">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  placeholder="Enter Email"
                />
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Enter Password"
                />
              </Form.Group>
              {error && (
                <div className="text-danger">{error}</div>
              )}
              <Button variant="success" type="submit">
                Sign In
              </Button>
            </Form>
          </div>
        </Col>
        <Col xs={12} md={6} className="login-image-col h-100">
          <div className="login-image">
            <div className="login-image-overlay">
              <h2>Sign up for free</h2>
              <p>
                Create an account to access exclusive features and content.
              </p>
              <Button variant="success" href="#">Sign up</Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login1;