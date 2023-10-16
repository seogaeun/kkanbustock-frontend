import React, { useState } from 'react';
import Modal from 'react-modal';
import './PopupComponent.css';




function PopupComponent({isOpen,closeModal,children}) {
  return (
    <div className="PopupWrap" style={{display: isOpen ? "block" : "none",}}>
      <div className="PopupBackground"></div>
      <div className="PopupMainContent">
        {children}
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
}
export default PopupComponent;