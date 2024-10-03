import React, { useState } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';

const PushNotificationsSettings = () => {
  const [enablePushNotifications, setEnablePushNotifications] = useState(false);
  const [notificationTypes, setNotificationTypes] = useState({
    alerts: false,
    updates: false,
    offers: false,
    news: false,
  });
  const [notificationFrequency, setNotificationFrequency] = useState('');
  const [customNotificationSettings, setCustomNotificationSettings] = useState({
    notificationSound: '',
    vibrationPattern: '',
  });
  const [additionalSettings, setAdditionalSettings] = useState({
    notificationPriority: '',
    notificationExpiration: '',
  });

  const handleEnablePushNotificationsChange = (e: any) => {
    setEnablePushNotifications(e.target.checked);
  };

  const handleNotificationTypesChange = (e: any) => {
    setNotificationTypes({ ...notificationTypes, [e.target.name]: e.target.checked });
  };

  const handleNotificationFrequencyChange = (e: any) => {
    setNotificationFrequency(e.target.value);
  };

  const handleCustomNotificationSettingsChange = (e: any) => {
    setCustomNotificationSettings({ ...customNotificationSettings, [e.target.name]: e.target.value });
  };

  const handleAdditionalSettingsChange = (e: any) => {
    setAdditionalSettings({ ...additionalSettings, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <div>
      <h3>Push Notifications Settings</h3>
      <Form onSubmit={handleSubmit} className='d-flex flex-column gap-3'>
        <Form.Group as={Row} controlId="enablePushNotifications">
          <Form.Label column sm={2}>
            Enable Push Notifications
          </Form.Label>
          <Col sm={10}>
            <Form.Check
              type="checkbox"
              label="Yes"
              checked={enablePushNotifications}
              onChange={handleEnablePushNotificationsChange}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="notificationTypes">
          <Form.Label column sm={2}>
            Notification Types
          </Form.Label>
          <Col sm={10}>
            <Form.Check
              type="checkbox"
              label="Alerts"
              name="alerts"
              checked={notificationTypes.alerts}
              onChange={handleNotificationTypesChange}
            />
            <Form.Check
              type="checkbox"
              label="Updates"
              name="updates"
              checked={notificationTypes.updates}
              onChange={handleNotificationTypesChange}
            />
            <Form.Check
              type="checkbox"
              label="Offers"
              name="offers"
              checked={notificationTypes.offers}
              onChange={handleNotificationTypesChange}
            />
            <Form.Check
              type="checkbox"
              label="News"
              name="news"
              checked={notificationTypes.news}
              onChange={handleNotificationTypesChange}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="notificationFrequency">
          <Form.Label column sm={2}>
            Notification Frequency
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              as="select"
              value={notificationFrequency}
              onChange={handleNotificationFrequencyChange}
            >
              <option value="">Select a frequency</option>
              <option value="immediate">Immediate</option>
              <option value="hourly">Hourly</option>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
            </Form.Control>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="customNotificationSettings">
          <Form.Label column sm={2}>
            Custom Notification Settings
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              className='mb-3'
              as="select"
              name="notificationSound"
              value={customNotificationSettings.notificationSound}
              onChange={handleCustomNotificationSettingsChange}
            >
              <option value="">Select a sound</option>
              <option value="default">Default sound</option>
              <option value="custom">Custom sound</option>
            </Form.Control>
            <Form.Control
              as="select"
              name="vibrationPattern"
              value={customNotificationSettings.vibrationPattern}
              onChange={handleCustomNotificationSettingsChange}
            >
              <option value="">Select a pattern</option>
              <option value="default">Default pattern</option>
              <option value="custom">Custom pattern</option>
            </Form.Control>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="additionalSettings">
          <Form.Label column sm={2}>
            Additional Settings
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              as="select"
              name="notificationPriority"
              value={additionalSettings.notificationPriority}
              onChange={handleAdditionalSettingsChange}
            >
              <option value="">Select a priority</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </Form.Control>
            <Form.Control
              as="select"
              name="notificationExpiration"
              value={additionalSettings.notificationExpiration}
              onChange={handleAdditionalSettingsChange}
            >
              <option value="">Select an expiration time</option>
              <option value="1 hour">1 hour</option>
              <option value="1 day">1 day</option>
              <option value="1 week">1 week</option>
            </Form.Control>
          </Col>
        </Form.Group>

        <div>
          <Button variant="primary" type="submit">
            Save Changes
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default PushNotificationsSettings;