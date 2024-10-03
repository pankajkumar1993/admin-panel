import { useState } from 'react';
import "./style.scss";
import { Link, useLocation } from 'react-router-dom';
import DownChevron from '../icons/DownChevron';
import ChevronOutlined from '../icons/ChevronOutlined';

const SidebarLinks = () => {
  const location = useLocation();
  const [showMore, setShowMore] = useState(false); 

  const projects = [
    { name: 'Expin', path: '/expin' },
    { name: 'Denhan', path: '/denhan' },
    { name: 'Tiny Learner', path: '/tiny-learner'},
    { name: 'Quotes App', path: '/quotes-app' },
    { name: 'Quickworker', path: '/quick-worker' },
    { name: 'Project X', path: '/project-x' },
    { name: 'Project Y', path: '/project-y' },
    { name: 'Project Z', path: '/project-z' },
  ];

  const initialProjectsCount = 3;

  return (
    <div>
      <h3 className='p-3'><DownChevron/> Projects</h3>
      <ul className='project-list'>
        {projects.slice(0, showMore ? projects.length : initialProjectsCount).map((project) => (
          <li
            key={project.name}
            className={location.pathname.includes(project.path) ? 'active' : ''}
          >
            <Link to={`${project.path}`} className='d-inline-block w-100'>{project.name}</Link>
          </li>
        ))}
        <li className='px-3'>
          <button className='show-more' onClick={() => setShowMore(!showMore)}>
            {showMore ? <span>Show less <ChevronOutlined position='down'/> </span>: <span>Show more <ChevronOutlined position='up'/></span>}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SidebarLinks;
