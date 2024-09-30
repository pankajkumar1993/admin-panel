import React from 'react';
import Logo from './Logo';

const ContactInfo: React.FC = () => {
  return (
    <div className='text-center'>
      <Logo />
      <div className='mt-2 d-flex flex-column '>
        <a className='text-secondary text-decoration-none' href="mailto:info@example.com">narinder@skycap.co.in</a>
        <button className='bg-transparent border-0 text-primary'>Edit Profile</button>
      </div>
    </div>
  );
};

export default ContactInfo; 