
import React, {useState } from 'react';
import Header from "../../components/Header/Header";
import axios from 'axios';
import TitleContentLayout from '../../components/ContentLayout/TitleContentLayout';
import SOL_welcome from './../../assets/images/SOL_welcome.png'
import My_type from './../../assets/images/choice.png'
import My_best from './../../assets/images/premium-quality.png'
import "./MyPage.css"
const componentContent ={imgSrc:SOL_welcome, inputTitle:"내 정보"};
const userInfo = {nickname:"안녕나는쏠",userid:"HiIamsol",userInvestType:"공격투자형"}
function MyPage() {

  return (
    <div>
      <Header name="내정보" />
      <hr></hr>
      <TitleContentLayout {...componentContent}>
        <div className="infoComponentWrap">
            <div className="infoTextContent">
                <div className='textInfo nicknameInfo'><span className='infoTitle'>닉네임</span>{userInfo.nickname}</div>
                <div className='textInfo idInfo'><span className='infoTitle'>아이디</span>{userInfo.userid}</div>

            </div>
            <div className="infoBtnContent">
                <button className="btnInfo myInvestType">
                    <img className="infoBtnImg" alt="my투자성향" src={My_type}></img>
                    My 투자 성향
                </button>
                <button className="btnInfo myBestInvest">
                <img className="infoBtnImg" alt="my추천종목" src={My_best}></img>
                    My 추천 종목
                </button>
            </div>
        </div>
      </TitleContentLayout>
      <hr></hr>
    </div>
  );
} 

export default MyPage;
