import React from 'react';
import "./MyGroupItem.css";
import GroupBtnImg from "./../../assets/images/GroupBtnImg.png"
import BlueSmallBtn from '../ButtonComponent/BlueSmallBtn';

function MyGroupItem({groupName="그룹 이름"}) {
    return (
        <div className='myGroup-container'>
            <h2>{groupName}</h2>
            <div className='groupInfo'>
                <img alt="그룹버튼이미지" src={GroupBtnImg}></img>
                <div className='groupInfoBtn'>
                    <BlueSmallBtn title="Match!"></BlueSmallBtn>
                </div>

            </div>
        </div>
        

    );
}

export default MyGroupItem;
