/**
 * @file  /admin-panel/src/views/home/HomePage.tsx
 * @author ZCO Engineer
 * @date   30, 09, 2024
 * @brief  HomePage component
 */

import React, { useState } from 'react';
import "./HomePage.scss"
import { Tab, Tabs } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { INITIAL_PROJECTS, Project, ProjectSettingsProps } from './projects';
import PushNotificationsSettings from '../../components/settings/Notification';
import GoogleSettings from '../../components/settings/GoogleSetting';
import Twillio from '../../components/settings/Twillio';
import AppleSettings from '../../components/settings/Apple';
import Notifier from '../../components/settings/Notifier';


const Home: React.FC<ProjectSettingsProps> = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const currentTab = query.get('tab') || 'Twilio'; // Default to 'Notifier'

  const handleTabChange = (tab: string | null) => {
    if (tab) {
      // console.log(tab, "tab___");
      navigate({
        pathname: location.pathname,
        search: `?tab=${tab}`,
      });
    }
  };
  return (
    <div>
      <div className="card shadow-md rounded-3 p-4 border-0">
        <div>
          <h3>Services</h3>
          <Tabs
            className="mb-3"
            activeKey={currentTab}
            onSelect={handleTabChange} // Use onSelect instead of onChange
          >
            <Tab eventKey="Twilio" title="Twilio" >
              <Twillio />
            </Tab>
            <Tab eventKey="Notifications" title="Push Notifications">
              <PushNotificationsSettings />
            </Tab>
            <Tab eventKey="Google" title="Google">
              <GoogleSettings />
            </Tab>
            <Tab eventKey="Apple" title="Apple">
              <AppleSettings />
            </Tab>
            <Tab eventKey="Notifier" title="Notifier">
              <Notifier />
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}


export default Home;