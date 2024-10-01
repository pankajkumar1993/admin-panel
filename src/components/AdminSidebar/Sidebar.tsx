import React, { useState } from 'react';
import "./style.scss"
import Logo from '../Logo';
import { LogoutIcon } from '../icons/Logout';
import SidebarLinks from './SidebarLinks';
import CustomModal from '../modal/CustomModal';
import EditProfileForm from '../EditProfileForm';
import PlusIcon from '../icons/PlusIcon';
const Profile = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className='d-flex flex-column h-100'>
        <div>
          <div className="profile-header text-center">
            <Logo />
            <div className="profile-info mt-2 mb-3">
              <p className='m-0'>narinder@skycap.co.in</p>
              <button className='text-primary border-0 p-0 bg-transparent' onClick={handleShow}>Edit Profile</button>
            </div>
          </div>
          <SidebarLinks />
        </div>
        <div className='p-3 logout-button-wrapper d-flex flex-column gap-3 '>
          <hr />
          <button className='btn btn-outline-primary' onClick={() => { /* Handle logout logic */ }}><PlusIcon /> Add New Project</button>
          <button className='logout-button' onClick={() => { /* Handle logout logic */ }}><LogoutIcon /> Logout</button>
        </div>
      </div>

      {/* Use CustomModal with EditProfileForm as the child */}
      <CustomModal show={show} handleClose={handleClose} title="Edit Profile">
        <EditProfileForm />
      </CustomModal>
    </>
  );
};

export default Profile;