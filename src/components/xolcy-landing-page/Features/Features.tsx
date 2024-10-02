import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { motion } from 'framer-motion'; // Import Framer Motion
import "./Features.scss";
import SectionHeading from '../SectionHeading/SectionHeading';
import FeatureImage from "../../../assets/images/index.jpg";
import UserIcon from './Icons/UserIcon';
import ChartIcon from './Icons/ChartIcon';
import CardIcon from './Icons/CardIcon';
import Arrow from '../icons/Arrow';

const Features: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
        staggerChildren: 0.3, // Adds delay between children animations
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <Container className="py-5">
      <Row className="align-items-center">
        <Col md={6}>
          <motion.div
            className="feature-image position-relative"
            variants={containerVariants} // Container animation for the image and stats
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of the section is in view
          >
            <motion.div variants={itemVariants}>
              <Image src={FeatureImage} fluid alt="features" />
            </motion.div>
            <div
              className="text-white px-5 py-4 rounded d-flex flex-column gap-3 align-items-center feature-user-stat"
            >
              <UserIcon />
              <span className="h4 mb-0">200+ Users</span>
            </div>
          </motion.div>
        </Col>
        <Col md={6}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Section heading */}
            <motion.div variants={itemVariants}>
              <SectionHeading
                title="Modern & Powerful Interface"
                description="In an ideal world this website wouldn't exist, a client would
                acknowledge the importance design starts."
                subTitle="Features"
                marginBottom="mb-3"
              />
            </motion.div>

            {/* List items */}
            <motion.ul
              className="list-unstyled mb-4 d-flex flex-column gap-3"
              variants={containerVariants}
            >
              {[
                { id: 1, icon: <span className="text-primary"><ChartIcon /></span>, label: 'Strategy Solution' },
                { id: 2, icon: <span className="text-primary"><CardIcon /></span>, label: 'Easy to Customize' }
              ].map((list) => (
                <motion.li className="fs-5 fw-medium" key={list.id} variants={itemVariants}>
                  {list.icon} {list.label}
                </motion.li>
              ))}
            </motion.ul>

            {/* Button */}
            <motion.div variants={itemVariants}>
              <Button variant="primary" href="#">
                Learn more <Arrow />
              </Button>
            </motion.div>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default Features;
