import React, { useState } from 'react';
import './PopupPortGrpAlarm.css';
import PopupComponent from './PopupComponent';
import GrpAcceptItem from '../GrpAccept/GrpAcceptItem';

function PopupPortGrpAlarm({userInfo,stockDataList,isOpen,closeModal}) {

  return (
            <PopupComponent isOpen={isOpen} closeModal={closeModal}>
                <div className='PopupPortGrpAlarmWrap'>
                    <div className="PopupPortRecommandStock-Title">My 그룹 알림</div>
                    <div className="PopupPortGrpAlarm-upContent">
                      <GrpAcceptItem hostName="서가돌" hostId="gadol"></GrpAcceptItem>
                    </div>

                </div>
            </PopupComponent>


  );
}
export default PopupPortGrpAlarm;