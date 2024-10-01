import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import "./HeroSection.scss"
import heroImage from "../../../assets/images/hero-one-3-bottom-img.png"
import MyNavbar from '../Navbar/MyNavbar';
import Arrow from '../icons/Arrow';
const HeroSection = () => {
  return (
    <header>
      <MyNavbar />
      <section className="hero py-5 position-relative">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col md={12} lg={10} xl={8} xxl={7} className="text-center">
              <p className="hero-subtitle text-uppercase d-inline-block m-0 py-2 px-4 rounded-3">Find Your Element</p>
              <h1 className="hero-title display-4 fw-medium my-4">Powering Business</h1>
              <p className="hero-description lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est error maxime
                ullam veritatis beatae impedit sit illo nulla nemo dolor mollitia ea unde.
              </p>
              <div className="hero-buttons mt-5">
                <Button variant="primary" className="me-3 px-4 py-2">Discover more <Arrow/></Button>
                <Button variant="outline-primary" className="px-4 py-2">Contact us <Arrow/></Button>
              </div>
            </Col>
          </Row>
        </Container>
        <div className='position-absolute bottom-0 start-0'>
          <img src={heroImage} className='w-100' alt="hero bottom image" />
        </div>
      </section>
    </header>
  );
};

export default HeroSection;