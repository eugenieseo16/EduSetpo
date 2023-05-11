import React from 'react';
import './AddChildModal.module.scss';

interface AddChildModalProps {
  isOpen: boolean;
  handleClose: () => void;
  children: React.ReactNode;
}

const AddChildModal: React.FC<AddChildModalProps> = ({
  isOpen,
  handleClose,
  children,
}) => {
  return (
    <>
      {isOpen && (
        <div className="modal">
          <div className="add-child-container">
            <button className="close-button" onClick={handleClose}>
              X
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default AddChildModal;
