import React, { useState } from 'react';
import './PopupInvestType.css';
import PopupComponent from './PopupComponent';
import InvestTypeDescript from '../InvestType/InvestTypeDescript';
import attackInvestor from './../../assets/images/SOL_explore.png';
import middleInvestor from './../../assets/images/Lay_think.png';
import comportInvestor from './../../assets/images/MOLY_plant.png';
import defaultImage from './../../assets/images/PLI_GO.png'

function PopupInvestType({userInfo,isOpen,closeModal}) {

        // userInfo.userInvestType 값에 따라 이미지 선택
    let investorImage;
    switch (userInfo.userInvestType) {
        case "공격투자형":
        investorImage = attackInvestor;
        break;
        case "위험중립형":
        investorImage = middleInvestor;
        break;
        case "안정추구형":
        investorImage = comportInvestor;
        break;
        default:
        // 기본 이미지 (필요에 따라 설정)
        investorImage = defaultImage;
    }
      

  return (
            <PopupComponent isOpen={isOpen} closeModal={closeModal}>
                <div className='PopupInvestTypeWrap'>
                    <div className="popupInvestType-upContent">
                    <div className="PopupInvestTypeTitle"><span>{userInfo.nickname}</span>님의 투자성향</div>
                    <div className="PopupInvestTypeText"><span>{userInfo.userInvestType}</span></div>
                    <img className="investorType-popupImg" src={investorImage} alt="투자자 이미지" />
                    </div>
                <div>
                <InvestTypeDescript InvestType={userInfo.userInvestType}></InvestTypeDescript>
                </div>

                </div>
            </PopupComponent>


  );
}
export default PopupInvestType;