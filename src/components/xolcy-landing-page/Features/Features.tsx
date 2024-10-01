import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import "./Features.scss"
import SectionHeading from '../SectionHeading/SectionHeading';
import FeatureImage from "../../../assets/images/index.jpg"
import UserIcon from './Icons/UserIcon';
import ChartIcon from './Icons/ChartIcon';
import CardIcon from './Icons/CardIcon';
import Arrow from '../icons/Arrow';

function Features() {
  return (
    <Container className="py-5">
      <Row className="align-items-center">
        <Col md={6}>
          <div className='feature-image position-relative'>
            <Image src={FeatureImage} fluid alt='features' />
            <div className="text-white px-5 py-4 rounded d-flex flex-column gap-3 align-items-center feature-user-stat">
              <UserIcon />
              <span className="h4 mb-0">200+ Users</span>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <SectionHeading title='Modern & Powerful Interface' description="In an ideal world this website wouldn't exist, a client would
            acknowledge the importance design starts." subTitle="Features" marginBottom={'mb-3'} />

          <ul className="list-unstyled mb-4 d-flex flex-column gap-3">
            {
              [
                { id: 1, icon: <span className='text-primary'><ChartIcon /></span>, label: 'Strategy Solution' },
                { id: 2, icon: <span className='text-primary'><CardIcon /></span>, label: 'Easy to Customize' }
              ].map((list) => {
                return (
                  <li className="fs-5 fw-medium" key={list.id}>
                    {list.icon} {list.label}
                  </li>
                )
              })
            }
          </ul>
          <Button variant="primary" href="#">
            Learn more <Arrow/>
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Features;