import React, { ReactNode } from 'react';
import { Modal } from 'react-bootstrap';
import "./CustomModal.scss"
interface CustomModalProps {
  show: boolean;
  handleClose: () => void;
  title: string;
  children: ReactNode;  // Accept any child component
}

const CustomModal: React.FC<CustomModalProps> = ({ show, handleClose, title, children }) => {
  return (
    <Modal show={show} onHide={handleClose} centered className='border-0' animation backdrop>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {children} {/* Render child component */}
      </Modal.Body>
    </Modal>
  );
};

export default CustomModal;
