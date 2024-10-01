import React from 'react';
import { Form, Button, Tabs, Tab } from 'react-bootstrap';
import "./DenhanProject.scss"
import { useLocation, useNavigate } from 'react-router-dom';
import Twillio from '../../components/settings/Twillio';
import PushNotificationsSettings from '../../components/settings/Notification';
import GoogleSettings from '../../components/settings/GoogleSetting';
import AppleSettings from '../../components/settings/Apple';

const HomePage: React.FC = () => {


  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const currentTab = query.get('tab') || 'twilio';

  const handleTabs = (tab: string | null) => {
    if (tab) {
      console.log(tab);
      navigate({
        pathname: "/denhan",
        search: `?tab=${tab}`,
      })
    }

  }

  return (
    <div className="services-form-wrapper">
      <div className="services-form">
        <h3>Services</h3>
        <Tabs activeKey={currentTab} id="services-tab" className="mb-3" onSelect={handleTabs}>
          <Tab eventKey="twilio" title="Twilio">
            <Twillio />
          </Tab>
          <Tab eventKey="pushNotifications" title="Push Notifications">
            <PushNotificationsSettings />
          </Tab>
          <Tab eventKey="google" title="Google">
            <GoogleSettings />
          </Tab>
          <Tab eventKey="apple" title="Apple">
            <AppleSettings />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default HomePage;
