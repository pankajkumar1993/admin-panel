import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import "./PricingSection.scss"
import SectionHeading from '../SectionHeading/SectionHeading';
import BulletIcon from './BulletIcon';
import Arrow from '../icons/Arrow';

const PricingSection = () => {
  return (
    <section className="pricing-section py-5">
      <Container>
        <Row className="justify-content-center position-relative">
          <Col md={10} lg={9} xl={8} xxl={7}>
            <SectionHeading title='Pricing Plans' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Est error maxime
              ullam veritatis beatae impedit sit illo nulla nemo dolor mollitia ea unde.' align='center' />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={4}>
          <div className="pricing-card h-100 d-flex flex-column">
              <div className='mb-3'>
                <h2 className="pricing-price mb-2">Free</h2>
                <h5 className="pricing-plan">Per Month</h5>
              </div>
              <ul className="pricing-description mt-2 flex-grow-1">
                <li><BulletIcon /> Online Space : 500MB</li>
                <li><BulletIcon /> Bandwidth : 1.5GB</li>
                <li><BulletIcon /> Support : Yes</li>
                <li><BulletIcon /> Hidden Fees : No</li>
                <li><BulletIcon /> Support : Yes</li>
                <li><BulletIcon /> Hidden Fees : No</li>
              </ul>
              <div>
                <Button variant="primary" className="mt-4">Choose Plan  <Arrow /></Button>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="pricing-card h-100 d-flex flex-column">
              <div className='mb-3'>
                <h2 className="pricing-price mb-2">62&#36;</h2>
                <h5 className="pricing-plan">Per Month</h5>
              </div>
              <ul className="pricing-description mt-2 flex-grow-1">
                <li><BulletIcon /> Online Space : 500MB</li>
                <li><BulletIcon /> Bandwidth : 1.5GB</li>
                <li><BulletIcon /> Support : Yes</li>
                <li><BulletIcon /> Hidden Fees : No</li>
              </ul>
              <div>
                <Button variant="primary" className="mt-4">Choose Plan  <Arrow /></Button>
              </div>
            </div>
          </Col>
          <Col md={4}>
          <div className="pricing-card h-100 d-flex flex-column">
              <div className='mb-3'>
                <h2 className="pricing-price mb-2">299&#36;</h2>
                <h5 className="pricing-plan">Per Month</h5>
              </div>
              <ul className="pricing-description mt-2 flex-grow-1">
                <li><BulletIcon /> Online Space : 500MB</li>
                <li><BulletIcon /> Bandwidth : 1.5GB</li>
                <li><BulletIcon /> Support : Yes</li>
                <li><BulletIcon /> Hidden Fees : No</li>
                <li><BulletIcon /> Online Space : 500MB</li>
                <li><BulletIcon /> Bandwidth : 1.5GB</li>
                <li><BulletIcon /> Support : Yes</li>
                <li><BulletIcon /> Hidden Fees : No</li>
              </ul>
              <div>
                <Button variant="primary" className="mt-4">Choose Plan  <Arrow /></Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PricingSection;