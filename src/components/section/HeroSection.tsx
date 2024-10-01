import React from 'react';
import { Container, Row, Col, Card, Button, Navbar, Nav } from 'react-bootstrap';
import './HeroSection.scss';
import { Link } from 'react-router-dom';
import LandingPageBlackBox from '../LandingPage/LandingPageBlackBox';
const CARD_DATA = [
  {
    title: 'Money Momentum',
    description: 'Track Premium helps you start smart investments quickly covering',
    rate: '7.20%',
    bgColor: 'bg-success',
    textColor: 'text-white',
  },
  {
    title: 'Long-Term',
    description: 'Create a vision. To get started, imagine your dream life.',
    rate: '14.20%',
    bgColor: 'bg-dark',
    textColor: 'text-white',
  },
  {
    title: 'Focused',
    description: 'Be focused! Life planning can serve as a roadmap or guide',
    rate: '11.20%',
    bgColor: 'bg-info',
    textColor: 'text-white',
  },
  {
    title: 'Fixed Income',
    description: 'Fixed income is a type of investment that provides regular income',
    rate: '8.20%',
    bgColor: 'bg-danger',
    textColor: 'text-white',
  },
]

const HeroSection = () => {
  return (
    <>
      <header className='shadow-sm bg-white sticky-top'>
        <Navbar expand="lg" className="">
          <Container>
            <Navbar.Brand href="#">Lyf-</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#" className='fw-semibold'>Login</Nav.Link>
                <Button variant="outline-dark" className='fw-semibold ms-2'>Get Started</Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <main>
        <section className="hero-section">
          <Container>
            <Row className="justify-content-center text-center">
              <Col md={8}>
                <h1 className="display-4 font-weight-bold mb-4">
                  Life Planning, Making Easy to Turn Dreams a Reality.
                </h1>
                <p className="lead mb-5">
                  Get Exclusive offers on purchase of any plans
                </p>
                <div className="d-flex justify-content-center align-items-center">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="form-control mr-3"
                  />
                  <Button variant="dark">
                    Sign Up
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="featured-plans pb-5">
          <Container>
            <Row>
              <Col md={12}>
                <div className="d-flex justify-content-between mb-4 align-items-center">
                  <h2 className="font-weight-bold m-0">Featured Plans</h2>
                  <Link to="" className='btn p-0 text-black fw-bold'>Explore All</Link>
                </div>
              </Col>
            </Row>
            <Row>
              {CARD_DATA.map((plan, index) => (
                <Col md={3} key={index}>
                  <Card className={`h-100 ${plan.bgColor} ${plan.textColor}`}>
                    <Card.Body className='d-flex flex-column'>
                      <Card.Title>{plan.title}</Card.Title>
                      <Card.Text className='flex-1'>{plan.description}</Card.Text>
                      <div className="d-flex justify-content-between align-items-center mt-auto">
                        <h2 className="font-weight-bold text-white m-0">{plan.rate}</h2>
                        <Button variant="light" size="sm">
                          +
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        <section className="section-cards">
          <Container>
            <Row className="justify-content-center">
              <Col md={8} lg={6} xl={4}>
                <h2 className="text-center mb-4">Discover Our Programs</h2>
              </Col>
            </Row>
            <Row>
              <Col md={4} className='program-card-wrapper'>
                <div className="program-card">
                  <h3>Program 1</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <button>Read More</button>
                </div>
              </Col>
              <Col md={4} className='program-card-wrapper'>
                <div className="program-card">
                  <h3>Program 2</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <button>Read More</button>
                </div>
              </Col>
              <Col md={4} className='program-card-wrapper'>
                <div className="program-card">
                  <h3>Program 3</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <button>Read More</button>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* <LandingPageChatGPt/> */}
        <LandingPageBlackBox />


      </main>
    </>
  );
};

export default HeroSection;
