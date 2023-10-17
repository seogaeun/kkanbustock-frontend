import React, { useState } from 'react';
import Modal from 'react-modal';
import './PopupComponent.css';


function PopupComponent({isOpen,closeModal,children}) {

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal(); // 팝업 배경을 클릭하면 닫기
    }
  }

  return (
    <div className="PopupWrap" style={{display: isOpen ? "block" : "none",}}>
      <div className="PopupBackground" onClick={handleBackgroundClick}></div>
      <div className="PopupMainContent">
        {children}
        <button onClick={closeModal}>창닫기</button>
      </div>
    </div>
  );
}
export default PopupComponent;