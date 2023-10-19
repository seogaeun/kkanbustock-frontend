import React from 'react';
import "./MyGroupItem.css";
import GroupBtnImg from "./../../assets/images/GroupBtnImg.png";
import BlueSmallBtn from '../ButtonComponent/BlueSmallBtn';

function MyGroupItem({ groupName = "그룹 이름", onClick }) {
  const handleMatchClick = () => {
    // 여기에서 그룹 정보를 MyGroupComponent로 전달
    onClick(groupName);
  }

  return (
    <div className='myGroup-container'>
      <h2>{groupName}</h2>
      <div className='groupInfo'>
        <img alt="그룹버튼이미지" src={GroupBtnImg}></img>
        <div className='groupInfoBtn'>
          <BlueSmallBtn title="Match!" onClick={handleMatchClick} />
        </div>
      </div>
    </div>
  );
}

export default MyGroupItem;
