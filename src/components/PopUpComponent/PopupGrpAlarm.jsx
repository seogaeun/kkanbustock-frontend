import React, { useState } from 'react';
import './PopupPortGrpAlarm.css';
import PopupComponent from './PopupComponent';


function PopupPortGrpAlarm({userInfo,stockDataList,isOpen,closeModal}) {

  return (
            <PopupComponent isOpen={isOpen} closeModal={closeModal}>
                <div className='PopupPortGrpAlarmWrap'>
                    <div className="PopupPortGrpAlarm-upContent">
                    </div>

                </div>
            </PopupComponent>


  );
}
export default PopupPortGrpAlarm;