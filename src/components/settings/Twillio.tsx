import React, { useState } from 'react'
import { Form } from 'react-bootstrap';

const Twillio = () => {
  const [sid, setSid] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [authenticationToken, setAuthenticationToken] = useState('');
  const [thresholdMinute, setThresholdMinute] = useState(0);
  const [thresholdHour, setThresholdHour] = useState(0);
  const [thresholdDay, setThresholdDay] = useState(0);


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Submit form logic here
  };

  return (
    <div>
      <div className='my-3'>
        <Form.Check
          type="switch"
          id="custom-switch"
          label="Service Status"
          className='shadow-none'
        />
      </div>
      <form onSubmit={handleSubmit} className='d-flex gap-3 flex-column service-form'>
        <div>
          <label className='form-label'>SID:</label>
          <input type="text" className='form-control' value={sid} onChange={(event) => setSid(event.target.value)} />
        </div>
        <div>
          <label className='form-label'>Phone Number:</label>
          <input
            disabled
            type="text"
            className='form-control'
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </div>
        <div>
          <label className='form-label'>Authentication Token:</label>
          <input
            disabled
            type="text"
            className='form-control'
            value={authenticationToken}
            onChange={(event) => setAuthenticationToken(event.target.value)}
          />
        </div>
        <div>
          <label className='form-label'>Threshold Minute:</label>
          <input
            disabled
            type="number"
            className='form-control'
            value={thresholdMinute}
            onChange={(event) => setThresholdMinute(Number(event.target.value))}
          />
        </div>
        <div>
          <label className='form-label'>Threshold Hour:</label>
          <input
            disabled
            type="number"
            className='form-control'
            value={thresholdHour}
            onChange={(event) => setThresholdHour(Number(event.target.value))}
          />
        </div>
        <div>
          <label className='form-label'>Threshold Day:</label>
          <input
            disabled
            type="number"
            className='form-control'
            value={thresholdDay}
            onChange={(event) => setThresholdDay(Number(event.target.value))}
          />
        </div>
        <div className='text-center text-md-end mt-2'>
          <button className='btn btn-primary px-4' type="submit">Save</button>
        </div>
      </form>
    </div>
  )
}

export default Twillio