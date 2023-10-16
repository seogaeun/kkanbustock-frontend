import React, { useState } from 'react';
import Header from "../../components/Header/Header";
import TitleContentLayout from '../../components/ContentLayout/TitleContentLayout';
import SOL_welcome from './../../assets/images/SOL_welcome.png';
import My_type from './../../assets/images/choice.png';
import My_best from './../../assets/images/premium-quality.png';
import My_portfolio from './../../assets/images/portfolio.png';
import My_grpBell from './../../assets/images/bell.png';
import "./MyPage.css";
import PopupComponent from '../../components/PopUpComponent/PopupComponent';
import PopupInvestType from '../../components/PopUpComponent/PopupInvestType';

const componentContent = { imgSrc: SOL_welcome, inputTitle: "내 정보" };
const userInfo = { nickname: "안녕나는쏠", userid: "HiIamsol", userInvestType: "공격투자형" };

function MyPage() {
  const [isInvestTypeModalOpen, setIsInvestTypeModalOpen] = useState(false);
  const [isPopupComponentModalOpen, setIsPopupComponentModalOpen] = useState(false);

  const openInvestTypeModal = () => setIsInvestTypeModalOpen(true);
  const closeInvestTypeModal = () => setIsInvestTypeModalOpen(false);

  const openPopupComponentModal = () => setIsPopupComponentModalOpen(true);
  const closePopupComponentModal = () => setIsPopupComponentModalOpen(false);

  return (
    <div>
      <Header name="내정보" />
      <div className="infoWrap">
        <PopupInvestType isOpen={isInvestTypeModalOpen} closeModal={closeInvestTypeModal} userInfo={userInfo}/>
        <PopupComponent isOpen={isPopupComponentModalOpen} closeModal={closePopupComponentModal} />

        <hr />
        <TitleContentLayout {...componentContent}>
          <div className="infoComponentWrap">
            <div className="infoTextContent">
              <div className='textInfo nicknameInfo'><span className='infoTitle'>닉네임</span>{userInfo.nickname}</div>
              <div className='textInfo idInfo'><span className='infoTitle'>아이디</span>{userInfo.userid}</div>
            </div>
            <div className="infoBtnContent">
              <button className="btnInfo myInvestType" onClick={openInvestTypeModal}>
                <img className="infoBtnImg" alt="my투자성향" src={My_type} />
                My 투자 성향
              </button>
              <button className="btnInfo myPortfolio" onClick={openInvestTypeModal}>
                <img className="infoBtnImg" alt="my포트폴리오" src={My_portfolio} />
                My 포트폴리오
              </button>
              <button className="btnInfo myBestInvest">
                <img className="infoBtnImg" alt="my추천종목" src={My_best} />
                My 추천 종목
              </button>
              <button className="btnInfo myGrpNotice">
                <img className="infoBtnImg" alt="my그룹 알림" src={My_grpBell} />
                My 그룹 알림
              </button>
            </div>
            <div className='logoutContent'>
              <button className='logoutBtn'>로그아웃하기</button>
            </div>
          </div>
        </TitleContentLayout>
        <hr />
      </div>
    </div>
  );
}

export default MyPage;
