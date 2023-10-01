import React from 'react';
import Modal from 'react-modal';

const CVModal = ({ isOpen, onRequestClose, cvUrl }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        overlay: {
          background: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 9999
        },
        content: {
          position: 'static',
          width: '80%',
          height: '80%',
          margin: '0 auto',
          padding: '20px',
          background: '#fff',
          borderRadius: '8px',
          outline: 'none',
          overflow: 'auto',
           zIndex: 99999
        }
      }}
    >
      <iframe
        src={cvUrl}
        title="CV"
        width="100%"
        height="100%"
        style={{ border: 'none' }}
      />
    </Modal>
  );
};

export default CVModal;
