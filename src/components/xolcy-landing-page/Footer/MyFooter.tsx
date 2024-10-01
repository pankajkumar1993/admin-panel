import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './MyFooter.scss';

const MyFooter = () => {
  return (
    <footer className="footer-section">
      <Container>
        <Row>
          <Col lg={4} md={6}>
            <div className="footer-widget">
              <h3 className="widget-title">XOLCY</h3>
              <p>
                In an ideal world this text wouldn't exist, a client would
                acknowledge the importance of having web copy before the design
                starts.
              </p>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="footer-widget">
              <h3 className="widget-title">Company</h3>
              <ul>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Media press</a>
                </li>
                <li>
                  <a href="#">Career</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="footer-widget">
              <h3 className="widget-title">Information</h3>
              <ul>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Agencies</a>
                </li>
                <li>
                  <a href="#">Our Apps</a>
                </li>
                <li>
                  <a href="#">Sitemap</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={2} md={6}>
            <div className="footer-widget">
              <h3 className="widget-title">More info</h3>
              <ul>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Discussion</a>
                </li>
                <li>
                  <a href="#">Terms & condition</a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      <hr />
      <Container>
        <Row>
          <Col xs={12}>
            <div className='d-flex justify-content-between align-items-center'>
            <p>&copy; 2023 Your Company Name</p>
            <ul className="list-inline footer-links">
              <li className="list-inline-item">
                <a href="#">Terms of Service</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Contact Us</a>
              </li>
            </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default MyFooter;