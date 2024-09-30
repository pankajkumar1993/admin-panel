import { Container, Row, Col } from 'react-bootstrap';
import ProjectDetail from './ProjectDetail';

const Panel = ({ children }: any) => {
  return (
    <Container className="panel" fluid>
      <Row className='gx-0'>
        <Col xs={12}>
          <div className='p-4'>
            <ProjectDetail/>
            {children}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Panel;