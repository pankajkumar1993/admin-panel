import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import "./LandingPageBlackBox.scss";


const LandingPageBlackBox: React.FC = () => {
  return (
    <section className="custom-hero-section">
      <Container className="custom-container">
        <Row>
          <Col md={6}>
            <h1 className="custom-hero-title">Welcome to our website</h1>
            <p className="custom-hero-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.
            </p>
            <button className="custom-hero-button">Learn More</button>
          </Col>
          <Col md={6}>
            <Image
              src="https://img.freepik.com/free-photo/halloween-haunted-landscape-illustration_23-2151843280.jpg?t=st=1727759392~exp=1727762992~hmac=36fb3b9001e5a9a102d79bbe20388659d6a7498d6585506f56e896d0e3bed036&w=1380"
              alt="Hero Image"
              className="custom-hero-image"
            />
          </Col>
        </Row>
      </Container>
    </section>

  );
};

export default LandingPageBlackBox;