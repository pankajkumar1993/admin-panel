import React from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import  "./SMSTable.scss"
function SMSTable() {
  const smsData = [
    {
      userName: 'SKYCAP SUMAN',
      phoneNumber: '+91 8794561230',
      body: 'Lorem ipsum Lorem ipsum\nLorem ipsum Lorem ipsum ..',
      dateTime: '15-05-24 16:18:55',
      status: 'Delivered',
    },
    // Add more SMS data here as needed
  ];

  return (
    <div className="App">
      <div>
        <h1 className="sms-title h4">SMS</h1>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>USER NAME</th>
              <th>PHONE NUMBER</th>
              <th>Body</th>
              <th>Date & Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {smsData.map((sms, index) => (
              <tr key={index}>
                <td>{sms.userName}</td>
                <td>{sms.phoneNumber}</td>
                <td>{sms.body}</td>
                <td>{sms.dateTime}</td>
                <td className={sms.status === 'Delivered' ? 'delivered-status' : 'pending-status'}>{sms.status}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default SMSTable;