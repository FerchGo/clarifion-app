import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Estilos del modal

function Modal({ open, onClose, onAccept }) {
  if (!open) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal">
        <h2>¿Aceptar la oferta?</h2>
        <p>¿Estás seguro de que deseas aceptar esta oferta?</p>
        <div className="modal-buttons">
          <button onClick={onAccept}>Aceptar</button>
          <button onClick={onClose}>Cancelar</button>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default Modal;
