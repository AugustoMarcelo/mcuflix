import React, { useState, useEffect } from 'react';

import ReactModal from 'react-modal';

interface IModalProps {
  children: any;
  isOpen: boolean;
  setIsOpen: () => void;
}

const Modal: React.FC<IModalProps> = ({ children, isOpen, setIsOpen }) => {
  const [modalStatus, setModalStatus] = useState(isOpen);

  useEffect(() => {
    setModalStatus(isOpen);
  }, [isOpen]);

  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
      onRequestClose={setIsOpen}
      isOpen={modalStatus}
      ariaHideApp={false}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          background: '#000',
          color: '#f0f0f5',
          borderRadius: '8px',
          width: '736px',
          border: 'none',
          boxShadow: '0 0px 15px #000',
        },
        overlay: {
          backgroundColor: '#121214e6',
          zIndex: 20,
        },
      }}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
