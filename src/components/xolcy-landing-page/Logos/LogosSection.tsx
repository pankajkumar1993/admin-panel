import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./LogosSection.scss"
const LogosSection = () => {
  return (
    <section className="py-5 bg-white"> {/* Added padding and light background */}
      <Container>
        <Row className="justify-content-center"> {/* Center the logos */}
          <Col md={3} className="text-center"> {/* Adjust column size as needed */}
            <img src={'https://themesdesign.in/xolcy/layout/images/brand-logo-1.png'} alt="Envato Logo" className="img-fluid" />
          </Col>
          <Col md={3} className="text-center">
            <img src={'https://themesdesign.in/xolcy/layout/images/brand-logo-2.png'} alt="WordPress Logo" className="img-fluid" />
          </Col>
          <Col md={3} className="text-center">
            <img src={'https://themesdesign.in/xolcy/layout/images/brand-logo-3.png'} alt="Magento Logo" className="img-fluid" />
          </Col>
          <Col md={3} className="text-center">
            <img src={'https://themesdesign.in/xolcy/layout/images/brand-logo-3.png'} alt="WooCommerce Logo" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LogosSection;