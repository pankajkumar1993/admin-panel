import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import './LandingPageChatGPt.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import LandingPageBlackBox from './LandingPageBlackBox';

const LandingPageChatGPt: React.FC = () => {
  return (
    <Container fluid className="landing-page">
      <header className="landing-header">
        <Container>
          <Row className="align-items-center">
            <Col>
              <h1 className="logo">GetResponse <FontAwesomeIcon icon={faEnvelope} /></h1>
            </Col>
            <Col className="text-right">
              <Button variant="outline-primary" className="mr-2">Log in</Button>
              <Button variant="primary">Sign up free</Button>
            </Col>
          </Row>
        </Container>
      </header>

      <section className="hero-section">
        <Container>
          <Row className="align-items-center">
            {/* Left side - Text content */}
            <Col md={6} className="hero-text">
              <h1>Marketing <span>beyond email</span></h1>
              <p>
                An affordable, easy platform to send emails, grow your list, and automate communication.
              </p>
              <Form className='d-flex'>
                <Form.Control type="email" placeholder="Email address" className="email-input" />
                <Button variant="primary" className="cta-button flex-shrink-0">Create free account</Button>
              </Form>
              <small>No credit card required | Cancel anytime</small>
            </Col>
            {/* Right side - Image */}
            <Col md={6} className="hero-image">
              <img src="https://img.freepik.com/free-photo/halloween-haunted-landscape-illustration_23-2151843280.jpg?t=st=1727759392~exp=1727762992~hmac=36fb3b9001e5a9a102d79bbe20388659d6a7498d6585506f56e896d0e3bed036&w=1380" alt="Hero" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="features-section">
        <Container>
          <Row>
            <Col md={3} className="feature-box">
              <i className="icon-email"></i>
              <h4>Email marketing</h4>
            </Col>
            <Col md={3} className="feature-box">
              <i className="icon-website"></i>
              <h4>Website builder</h4>
            </Col>
            <Col md={3} className="feature-box">
              <i className="icon-automation"></i>
              <h4>Marketing automation</h4>
            </Col>
            <Col md={3} className="feature-box">
              <i className="icon-ecommerce"></i>
              <h4>Ecommerce Marketing</h4>
            </Col>
          </Row>
        </Container>
      </section>

      <LandingPageBlackBox/>
    </Container>
  );
};

export default LandingPageChatGPt;
