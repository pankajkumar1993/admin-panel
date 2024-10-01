import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './AccountNotifer.scss';

const AccountNotifer: React.FC = () => {
  const [title, setTitle] = useState('Account Approved');
  const [description, setDescription] = useState(
    'lorem ipsum lorem ipsum lorem\nipsum lorem ipsum lorem ipsum\nlorem ipsum lorem ipsum'
  );

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission here, e.g., send data to API
    console.log('Title:', title);
    console.log('Description:', description);
  };

  return (
    <Container className="py-5">
      <Row>
        <Col>
          <h2 className="text-primary">Notifier / Account Approved</h2>
          <div className="card">
            <div className="card-body">
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Save
                </Button>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AccountNotifer;