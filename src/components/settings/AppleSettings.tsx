import React, { useState } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';

const AppleSettings = () => {
  const [appleCredentials, setAppleCredentials] = useState({
    teamId: '',
    bundleId: '',
    certificate: '',
    privateKey: '',
  });

  const [pushNotificationSettings, setPushNotificationSettings] = useState({
    pushNotificationCertificate: '',
    pushNotificationPrivateKey: '',
  });

  const [additionalSettings, setAdditionalSettings] = useState({
    appleAppId: '',
    appleAppSecret: '',
  });

  const handleAppleCredentialsChange = (e: any) => {
    setAppleCredentials({ ...appleCredentials, [e.target.name]: e.target.value });
  };



  const handleAdditionalSettingsChange = (e: any) => {
    setAdditionalSettings({ ...additionalSettings, [e.target.name]: e.target.value });
  };

  const handleCertificateUpload = (e: any) => {
    setAppleCredentials({ ...appleCredentials, certificate: e.target.files[0] });
  };

  const handlePrivateKeyUpload = (e: any) => {
    setAppleCredentials({ ...appleCredentials, privateKey: e.target.files[0] });
  };

  const handlePushNotificationCertificateUpload = (e: any) => {
    setPushNotificationSettings({ ...pushNotificationSettings, pushNotificationCertificate: e.target.files[0] });
  };

  const handlePushNotificationPrivateKeyUpload = (e: any) => {
    setPushNotificationSettings({ ...pushNotificationSettings, pushNotificationPrivateKey: e.target.files[0] });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} className='d-flex flex-column gap-3'>
        <Form.Group as={Row} controlId="appleCredentials">
          <Form.Label column sm={2}>
            Apple Credentials
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              className='mb-2'
              type="text"
              name="teamId"
              value={appleCredentials.teamId}
              onChange={handleAppleCredentialsChange}
              placeholder="Enter Team ID"
            />
            <Form.Control
              className='mb-2'
              type="text"
              name="bundleId"
              value={appleCredentials.bundleId}
              onChange={handleAppleCredentialsChange}
              placeholder="Enter Bundle ID"
            />
            <Form.Check
              id="certificate"
              name="certificate"
              onChange={handleCertificateUpload}
              label="Upload Certificate"
            />
            <Form.Check
              id="privateKey"
              name="privateKey"
              onChange={handlePrivateKeyUpload}
              label="Upload Private Key"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="pushNotificationSettings">
          <Form.Label column sm={2}>
            Push Notification Settings
          </Form.Label>
          <Col sm={10}>
            <Form.Check
              id="pushNotificationCertificate"
              name="pushNotificationCertificate"
              onChange={handlePushNotificationCertificateUpload}
              label="Upload Push Notification Certificate"
            />
            <Form.Check
              id="pushNotificationPrivateKey"
              name="pushNotificationPrivateKey"
              onChange={handlePushNotificationPrivateKeyUpload}
              label="Upload Push Notification Private Key"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="additionalSettings">
          <Form.Label column sm={2}>
            Additional Settings
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              className='mb-2'
              type="text"
              name="appleAppId"
              value={additionalSettings.appleAppId}
              onChange={handleAdditionalSettingsChange}
              placeholder="Enter Apple App ID"
            />
            <Form.Control
              className='mb-2'
              type="text"
              name="appleAppSecret"
              value={additionalSettings.appleAppSecret}
              onChange={handleAdditionalSettingsChange}
              placeholder="Enter Apple App Secret"
            />
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

export default AppleSettings;