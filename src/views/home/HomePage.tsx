/**
 * @file  /admin-panel/src/views/home/HomePage.tsx
 * @author ZCO Engineer
 * @date   30, 09, 2024
 * @brief  HomePage component
 */

import React, { useState } from 'react';
import "./HomePage.scss"
import Form from 'react-bootstrap/Form';
import { Button, Pagination, Tab, Table, Tabs } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { INITIAL_PROJECTS, Project, ProjectSettingsProps } from './projects';


const Home: React.FC<ProjectSettingsProps> = () => {
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

  const [projects, setProjects] = useState<Project[]>(INITIAL_PROJECTS);

  const handleDeleteProject = (id: number) => {
    const updatedProjects = projects.filter((project) => project.id !== id);
    setProjects(updatedProjects);
  };

  const handleChange = (id: number, currentStatus: string) => {
    const newStatus = currentStatus.toLowerCase() === "active" ? "inactive" : "active";

    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === id ? { ...project, status: newStatus } : project
      )
    );
  };

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
            </Tab>
            <Tab eventKey="Notifications" title="Push Notifications">
              Tab content for Profile
            </Tab>
            <Tab eventKey="Google" title="Google">
              Tab content for Loooonger Tab
            </Tab>
            <Tab eventKey="Apple" title="Apple">
              Tab content for Apple Tab
            </Tab>
            <Tab eventKey="Notifier" title="Notifier">
              <div className='text-end'>
                <button className='bg-transparent text-primary'>+ Add New Action</button>
              </div>
              <Table responsive striped bordered hover className='mt-4'>
                <thead>
                  <tr>
                    <th>Status</th>
                    <th>Project Key</th>
                    <th>SID</th>
                    <th>Phone Number</th>
                    <th>Authentication Token</th>
                    <th>Threshold Minute</th>
                    <th>Threshold Hour</th>
                    <th>Threshold Day</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map((project) => (
                    <tr key={project.id}>
                      <td>
                        <Form.Check // prettier-ignore
                          type="switch"
                          id="custom-switch"
                          label=""
                          className='shadow-none'
                          onChange={() => handleChange(project.id, project.status)} // Pass the project id and current status
                          checked={project.status.toLowerCase() === "active"}
                        />
                      </td>
                      <td>{project.projectKey}</td>
                      <td>{project.sid}</td>
                      <td>{project.phoneNumber}</td>
                      <td>{project.authToken}</td>
                      <td>{project.thresholdMinute}</td>
                      <td>{project.thresholdHour}</td>
                      <td>{project.thresholdDay}</td>
                      <td>
                        <Button variant="danger" onClick={() => handleDeleteProject(project.id)}>
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <div className="d-flex justify-content-end mt-4">
                <Pagination>
                  <Pagination.First />
                  <Pagination.Prev />
                  <Pagination.Item active>{1}</Pagination.Item>
                  <Pagination.Item>{2}</Pagination.Item>
                  <Pagination.Item>{3}</Pagination.Item>
                  <Pagination.Next />
                  <Pagination.Last />
                </Pagination>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}


export default Home;