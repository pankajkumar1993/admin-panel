import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './MyNavbar.scss';
import Arrow from '../icons/Arrow';

function MyNavbar() {
  return (
    <Navbar className="my-navbar" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="my-navbar-brand">
          <span className="text-primary">
            <span className="brand-logo">XOLCY</span>
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="my-navbar-toggle" />
        <Navbar.Collapse id="basic-navbar-nav" className="my-navbar-collapse">
          <Nav className="my-navbar-nav">
            <Nav.Link href="#home" className="my-navbar-link">Home</Nav.Link>
            <Nav.Link href="#services" className="my-navbar-link">Services</Nav.Link>
            <Nav.Link href="#features" className="my-navbar-link">Features</Nav.Link>
            <Nav.Link href="#clients" className="my-navbar-link">Clients</Nav.Link>
            <Nav.Link href="#portfolio" className="my-navbar-link">Portfolio</Nav.Link>
            <Nav.Link href="#pricing" className="my-navbar-link">Pricing</Nav.Link>
            <Nav.Link href="#build" className="btn btn-primary d-lg-none text-white">Build Yours <Arrow/></Nav.Link>
          </Nav>
        </Navbar.Collapse>
            <Nav.Link href="#build" className="btn btn-primary d-none d-lg-inline-block text-white">Build Yours <Arrow/></Nav.Link>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;