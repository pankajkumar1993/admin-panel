import React, { useState } from 'react';
import { Form, Button, Col, Row, Container } from 'react-bootstrap';

const GoogleSettings = () => {
  const [googleCredentials, setGoogleCredentials] = useState({
    clientId: '',
    clientSecret: '',
    redirectUri: '',
  });

  const [apiKeys, setApiKeys] = useState({
    apiKey: '',
    apiKeySecret: '',
  });

  const [additionalSettings, setAdditionalSettings] = useState({
    googleProjectId: '',
    googleServiceAccountEmail: '',
    googlePrivateKey: '',
  });

  const handleGoogleCredentialsChange = (e: any) => {
    setGoogleCredentials({ ...googleCredentials, [e.target.name]: e.target.value });
  };

  const handleApiKeysChange = (e: any) => {
    setApiKeys({ ...apiKeys, [e.target.name]: e.target.value });
  };

  const handleAdditionalSettingsChange = (e: any) => {
    setAdditionalSettings({ ...additionalSettings, [e.target.name]: e.target.value });
  };

  const handlePrivateKeyUpload = (e: any) => {
    setAdditionalSettings({ ...additionalSettings, googlePrivateKey: e.target.files[0] });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} className='d-flex flex-column gap-3'>
        <Form.Group as={Row} controlId="googleCredentials">
          <Form.Label column sm={2}>
            Google Credentials
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="clientId"
              value={googleCredentials.clientId}
              onChange={handleGoogleCredentialsChange}
              placeholder="Enter Client ID"
              className='mb-2'
            />
            <Form.Control
              type="text"
              name="clientSecret"
              value={googleCredentials.clientSecret}
              onChange={handleGoogleCredentialsChange}
              placeholder="Enter Client Secret"
              className='mb-2'
            />
            <Form.Control
              type="text"
              name="redirectUri"
              value={googleCredentials.redirectUri}
              onChange={handleGoogleCredentialsChange}
              placeholder="Enter Redirect URI"
              className='mb-2'
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="apiKeys">
          <Form.Label column sm={2}>
            API Keys
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="apiKey"
              value={apiKeys.apiKey}
              onChange={handleApiKeysChange}
              placeholder="Enter API Key"
              className='mb-2'
            />
            <Form.Control
              type="text"
              name="apiKeySecret"
              value={apiKeys.apiKeySecret}
              onChange={handleApiKeysChange}
              placeholder="Enter API Key Secret"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="additionalSettings">
          <Form.Label column sm={2}>
            Additional Settings
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="googleProjectId"
              value={additionalSettings.googleProjectId}
              onChange={handleAdditionalSettingsChange}
              placeholder="Enter Google Project ID"
              className='mb-2'
            />
            <Form.Control
              type="text"
              name="googleServiceAccountEmail"
              value={additionalSettings.googleServiceAccountEmail}
              onChange={handleAdditionalSettingsChange}
              placeholder="Enter Google Service Account Email"
              className='mb-2'
            />
            <Form.Check
              id="googlePrivateKey"
              name="googlePrivateKey"
              onChange={handlePrivateKeyUpload}
              label="Upload Google Private Key"
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

export default GoogleSettings;