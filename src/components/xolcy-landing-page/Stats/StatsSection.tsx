import React from 'react';
import "./StatsSection.scss"
import { Col, Container, Row } from 'react-bootstrap';
import ProjectsIcon from './icons/ProjectsIcon';

const StatsSection = () => {
  return (
    <section className="stats-section">
      <Container className='position-relative z-1'>
        <Row className="stats-container">
          <Col xs={12} md={3}>
            <div className='text-center'>
              <div className='text-white mb-3'><ProjectsIcon /></div>
              <h2 className="stats-number mb-1">2570+</h2>
              <p className="stats-text">Projects Done</p>
            </div>
          </Col>
          <Col xs={12} md={3}>
            <div className='text-center'>
              <div className='text-white mb-3'><ProjectsIcon /></div>
              <h2 className="stats-number">300+</h2>
              <p className="stats-text">Awards Wins</p>
            </div>
          </Col>
          <Col xs={12} md={3}>
            <div className='text-center'>
              <div className='text-white mb-3'><ProjectsIcon /></div>
              <h2 className="stats-number">4500+</h2>
              <p className="stats-text">Happy Clients</p>
            </div>
          </Col>
          <Col xs={12} md={3}>
            <div className='text-center'>
              <div className='text-white mb-3'><ProjectsIcon /></div>
              <h2 className="stats-number">270+</h2>
              <p className="stats-text">Country</p>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="overlay"></div>
    </section>
  );
};

export default StatsSection;