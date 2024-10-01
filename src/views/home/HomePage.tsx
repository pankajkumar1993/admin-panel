import React from 'react';
import './HomePage.scss';
import { Tab, Tabs } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { ProjectSettingsProps } from './projects';
import PushNotificationsSettings from '../../components/settings/Notification';
import GoogleSettings from '../../components/settings/GoogleSetting';
import Twillio from '../../components/settings/Twillio';
import AppleSettings from '../../components/settings/AppleSettings';
import Notifier from '../../components/settings/Notifier';
import EmailTable from '../../components/notifications/EmailTable';
import SMSTable from '../../components/notifications/SMSTable';
import PushTable from '../../components/notifications/PushTable';
import AccountNotifer from '../../components/notifications/AccountNotifer';
import CalenderComponentBlackBox from '../../components/calender/CalenderComponentBlackBox';
import CalenderComponentChatGpt from '../../components/calender/CalenderComponentChatGpt';

const Home: React.FC<ProjectSettingsProps> = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const currentTab = query.get('tab') || 'Twilio'; // Default to 'Twilio'

  const handleTabChange = (tab: string | null) => {

    console.log(tab);

    if (tab) {
      navigate({
        pathname: location.pathname,
        search: `?tab=${tab}`,
      });
    }
  };

  return (
    <div>
      <div className="card shadow-md rounded-3 p-4 border-0">
        <h3>Services</h3>
        <Tabs
          className="mb-3"
          activeKey={currentTab}
          onSelect={handleTabChange}
        >
          <Tab eventKey="Twilio" title="Twilio">
            <Twillio />
            <CalenderComponentBlackBox />
            <CalenderComponentChatGpt />
          </Tab>
          <Tab eventKey="Notifications" title="Push Notifications">
            <div className='d-flex flex-column gap-4'>
              <PushNotificationsSettings />
              <EmailTable />
              <SMSTable />
              <PushTable />
              <AccountNotifer />
            </div>
          </Tab>
          <Tab eventKey="Google1" title="Google">
            <GoogleSettings />
          </Tab>
          <Tab eventKey="Apple1" title="Apple">
            <AppleSettings />
          </Tab>
          <Tab eventKey="Notifier" title="Notifier">
            <Notifier />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default Home;
