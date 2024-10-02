import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { motion } from 'framer-motion'; // Import Framer Motion
import './MyNavbar.scss';
import Arrow from '../icons/Arrow';

const MyNavbar: React.FC = () => {
  // Animation variants for navbar links
  const linkVariants = {
    hidden: (index: number) => ({
      opacity: 0,
      y: index % 2 === 0 ? -20 : 20, // Alternate between top and bottom
    }),
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  // Animation variants for buttons
  const HeaderLinkVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <Navbar className="my-navbar" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="my-navbar-brand">
          <motion.div variants={HeaderLinkVariants} className="text-primary">
            <span className="brand-logo fw-bold">XOLCY</span>
          </motion.div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="my-navbar-toggle" />
        <Navbar.Collapse id="basic-navbar-nav" className="my-navbar-collapse">
          <Nav className="my-navbar-nav">
            {['Home', 'Services', 'Features', 'Clients', 'Portfolio', 'Pricing'].map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={linkVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
              >
                <Nav.Link href={`#${item.toLowerCase()}`} className="my-navbar-link">
                  {item}
                </Nav.Link>
              </motion.div>
            ))}
            <motion.div
              custom={6}
              variants={HeaderLinkVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
            >
              <Nav.Link href="#build" className="btn btn-primary d-lg-none text-white">
                Build Yours <Arrow />
              </Nav.Link>
            </motion.div>
          </Nav>
        </Navbar.Collapse>
        <motion.div
          custom={7}
          variants={HeaderLinkVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <Nav.Link href="#build" className="btn btn-primary d-none d-lg-inline-block text-white">
            Build Yours <Arrow />
          </Nav.Link>
        </motion.div>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
