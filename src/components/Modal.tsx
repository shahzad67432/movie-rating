import React from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg w-11/12 max-w-2xl">
        <button
          onClick={onClose}
          className="text-white bg-red-600 hover:bg-red-500 font-bold py-2 px-4 rounded mb-4 self-end"
        >
          Close
        </button>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root') as HTMLElement
  );
};

export default Modal;
