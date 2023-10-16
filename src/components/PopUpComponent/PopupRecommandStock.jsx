import React, { useState } from 'react';
import './PopupPortRecommandStock.css';
import PopupComponent from './PopupComponent';


function PopupPortRecommandStock({userInfo,stockDataList,isOpen,closeModal}) {

  return (
            <PopupComponent isOpen={isOpen} closeModal={closeModal}>
                <div className='PopupPortRecommandStockWrap'>
                    <div className="PopupPortRecommandStock-upContent">
                    </div>

                </div>
            </PopupComponent>


  );
}
export default PopupPortRecommandStock;