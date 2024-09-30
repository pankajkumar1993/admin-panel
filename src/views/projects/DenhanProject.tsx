import React from 'react';
import { Form, Button, Tabs, Tab } from 'react-bootstrap';
import "./DenhanProject.scss"
import { useLocation, useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {


  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const currentTab = query.get('tab') || 'twilio';

  const handleTabs = (tab: string | null) => {
    if (tab) {
      console.log(tab);
      navigate({
        pathname: "/denhan",
        search: `?tab=${tab}`,
      })
    }

  }

  return (
    <div className="services-form-wrapper">
      <div className="services-form">
        <h2>Services</h2>
        <Tabs activeKey={currentTab} id="services-tab" className="mb-3" onSelect={handleTabs}>
          <Tab eventKey="twilio" title="Twilio">
            <Form>
              <Form.Group controlId="serviceStatus">
                <Form.Check
                  type="switch"
                  id="serviceStatus-switch"
                  label="Service Status"
                  defaultChecked
                />
              </Form.Group>

              <Form.Group controlId="sid" className="mb-3">
                <Form.Label>SID</Form.Label>
                <Form.Control type="text" placeholder="Enter the SID" />
              </Form.Group>

              <Form.Group controlId="phoneNumber" className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" placeholder="Phone Number" />
              </Form.Group>

              <Form.Group controlId="authToken" className="mb-3">
                <Form.Label>Authentication Token</Form.Label>
                <Form.Control type="text" placeholder="Authentication Token" />
              </Form.Group>

              <Form.Group controlId="thresholdMinute" className="mb-3">
                <Form.Label>Threshold Minute</Form.Label>
                <Form.Control type="text" placeholder="Threshold Minute" />
              </Form.Group>

              <Form.Group controlId="thresholdHour" className="mb-3">
                <Form.Label>Threshold Hour</Form.Label>
                <Form.Control type="text" placeholder="Threshold Hour" />
              </Form.Group>

              <Form.Group controlId="thresholdDay" className="mb-3">
                <Form.Label>Threshold Day</Form.Label>
                <Form.Control type="text" placeholder="Threshold Day" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Save
              </Button>
            </Form>
          </Tab>
          <Tab eventKey="pushNotifications" title="Push Notifications">
            <p>Push Notifications settings...</p>
          </Tab>
          <Tab eventKey="google" title="Google">
            <p>Google settings...</p>
          </Tab>
          <Tab eventKey="apple" title="Apple">
            <p>Apple settings...</p>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default HomePage;
