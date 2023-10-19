import React, { useState } from 'react';
import './GrpAcceptItem.css';


function GrpAcceptItem({hostName,hostId}) {

  return (
                <div className='GrpAcceptItemWrap'>
                    <div className="GrpAcceptItem-upContent">
                      <div className="ApprovalQuestion">
                          {hostName} &#40;{hostId}&#41;의 깐부를 맺으시겠습니까?
                      </div>
                      <button className="ApprovalBtn">깐부맺기</button>
                    </div>

                </div>


  );
}
export default GrpAcceptItem;