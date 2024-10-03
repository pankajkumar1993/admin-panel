import { useState } from 'react'
import CopyIcon from './icons/CopyIcon'
import { Form } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import { sanitizeAndCapitalize } from '../utils/commonFunctions'

const ProjectDetail = () => { 
  const {pathname} = useLocation();
  
   const [projectKey] = useState('7eD6955f-3wes87-45n89cn-52f6w4d2');
   
   const handleRegenerateProjectKey = () => {
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(projectKey)
      .then(() => {
        alert('Copied to clipboard successfully');
      })
      .catch(err => {
        console.error('Failed to copy:', err);
      });
  };



  return (
    <div className='d-flex align-items-center justify-content-between mb-3'>
    <div className='d-flex align-items-center gap-3'>
      <h2>{ pathname === "/" ? "Expin" : sanitizeAndCapitalize(pathname)}</h2>
      <Form.Check
        type="switch"
        id="custom-switch"
        label=""
        className='shadow-none'
      />
    </div>
    <div className='d-flex gap-3 align-items-center flex-shrink-0'>
      <label className='text-nowrap'>Project Key:</label>
      <div className="input-group">
        <input className='form-control border-end-0 bg-tertiary' type="text" value={projectKey} readOnly />
        <span className="input-group-text" onClick={handleCopy} role='button'><CopyIcon/></span>
      </div>

      <button className='btn btn-primary flex-shrink-0' onClick={handleRegenerateProjectKey}>Regenerate Project Key</button>
    </div>
  </div>
  )
}

export default ProjectDetail