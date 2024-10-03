import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { Button, Pagination, Table } from 'react-bootstrap';
import { INITIAL_PROJECTS, Project } from '../../views/home/projects';

const Notifier = () => {
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
  return (
    <div>
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
                <Form.Check 
                  type="switch"
                  id="custom-switch"
                  label=""
                  className='shadow-none'
                  onChange={() => handleChange(project.id, project.status)} 
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
    </div>
  )
}

export default Notifier