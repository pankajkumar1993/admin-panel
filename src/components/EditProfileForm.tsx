import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const EditProfileForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <Form className='d-flex flex-column gap-3'>
      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          value={email}
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formNewPassword">
        <Form.Label>New Password</Form.Label>
        <Form.Control
          type="password"
          value={newPassword}
          placeholder="Enter your password"
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formConfirmPassword">
        <Form.Label>Re-enter Password</Form.Label>
        <Form.Control
          type="password"
          value={confirmPassword}
          placeholder="Confirm your password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </Form.Group>

      <Form.Group className='flex-nowrap'>
        <Button variant="primary">
          Save Changes
        </Button>
      </Form.Group>
    </Form>
  );
};

export default EditProfileForm;
