import React from 'react';
import { Container, Table } from 'react-bootstrap';
import "./EmailTable.scss";

const EmailTable = () => {
  const emailData = [
    {
      userName: 'SKYCAP SUMAN',
      email: 'suman@skycap.co.in',
      subject: 'Lorem ipsum Lorem ipsum\nLorem ipsum Lorem ipsum..',
      body: 'Lorem ipsum Lorem ipsum\nLorem ipsum Lorem ipsum..',
      dateTime: '15-05-24 16:18:55',
      status: 'Delivered',
    },
  ];

  return (
    <div>
      <h4 style={{ color: 'blue' }}>EMAIL</h4>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>USER NAME</th>
            <th>EMAIL</th>
            <th>Subject</th>
            <th>Body</th>
            <th>Date & Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {emailData.map((email, index) => (
            <tr key={index}>
              <td>{email.userName}</td>
              <td>{email.email}</td>
              <td>{email.subject}</td>
              <td>{email.body}</td>
              <td>{email.dateTime}</td>
              <td style={{ color: email.status === 'Delivered' ? 'green' : 'red' }}>
                {email.status}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default EmailTable;