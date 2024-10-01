import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './OurServices.scss';
import ServicesCard, { ServicesCardProps } from './ServicesCard';
import SectionHeading from '../SectionHeading/SectionHeading';

const servicesData: ServicesCardProps[] = [
  {
    id: 1,
    icon: '🛑',
    title: 'Awesome Support',
    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content platform.',
    url: ""
  },
  {
    id: 2,
    icon: '💧',
    title: 'Dynamic Growth',
    description: 'Credibly brand standards compliant users without extensible services. Anibh euismod tincidunt.',
    url: ""
  },
  {
    id: 3,
    icon: '🛑',
    title: 'Branding Identity',
    description: 'Separated they live in Bookmarksgrove right at the coast of the Semantics, and large language ocean neary.',
    url: ""
  },
  {
    id: 4,
    icon: '💬',
    title: 'Solutions Business',
    description: 'It is a paradisematic country, in which roasted parts of sentences fly into your mouth leave for the far World.',
    url: ""
  },
  {
    id: 5,
    icon: '🛑',
    title: 'Digital Design',
    description: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
    url: ""
  },
  {
    id: 6,
    icon: '🛡️',
    title: 'Goal Business',
    description: 'Question Marks and devious Semikoli, but the Little Blind Text didn\'t listen. She packed her seven versalia.',
    url: ""
  },
];

const OurServices = () => {
  return (
    <section className="our-services">
      <Container>
        <Row className='justify-content-center'>
          <Col md={10} lg={8} xl={6}>
            <SectionHeading title='Our Services' description='We craft digital, graphic and dimensional thinking, to create category leading brand experiences that have meaning and add a value for our clients.' align='center' />
          </Col>
        </Row>
        <Row>
          {servicesData.map((service) => (
            <Col md={4} key={service.id} className="mb-4">
              <ServicesCard {...service} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default OurServices;