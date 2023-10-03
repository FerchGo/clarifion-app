import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Modal({ open, onClose, onAccept }) {
  if (!open) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal">
        <h2>Do you want to accept the offer?</h2>
        <p>are you completely sure to accept this offer?</p>
        <div className="modal-buttons">
          <button onClick={onAccept} className='btnmodal1'>Yes, I will</button>
          <button onClick={onClose} className='btnmodal2'>No, I wont</button>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default Modal;
