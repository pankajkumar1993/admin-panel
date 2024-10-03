import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../AdminSidebar/Sidebar';
import Panel from '../Panel';

const styles = {
  container: {
    display: 'flex',
    height: '100vh', 
  },
  sidebar: {
    width: 250, 
    transition: 'width 0.3s ease-in-out', 
  },
  sidebarToggle: { 
    display: 'block', 
    padding: '10px',
    backgroundColor: '#ccc',
    border: 'none',
    cursor: 'pointer',
  },
  mainContent: {
    width: 'calc(100% - 250px)',
    transition: 'width 0.3s ease-in-out',
    backgroundColor: '#fafafa'
  },
};

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div style={styles.container}>
      <button
        style={{ ...styles.sidebarToggle, display: isSidebarOpen ? 'none' : 'block' }}
        onClick={toggleSidebar}>
        Toggle Sidebar
      </button>
      {/* Sidebar */}
      <div
        className='projects-section'
        style={{
          ...styles.sidebar,
          width: isSidebarOpen ? 250 : 0, 
        }}
      >
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div
        style={{
          ...styles.mainContent,
          width: isSidebarOpen ? 'calc(100% - 250px)' : '100%',
        }}
      >
        <Panel>
          <Outlet />
        </Panel>
      </div>
    </div>
  );
};

export default Layout;