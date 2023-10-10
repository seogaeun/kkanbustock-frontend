import React from 'react';
import "./myGroup.css";
import GroupBtnImg from "./../../assets/images/GroupBtnImg.png"

let groupName="그룹1";
function myGroup() {
    return (
        <div className='myGroup-container'>
            <h2>{groupName}</h2>
            <div className='groupInfo'>
                <img alt="그룹버튼이미지" src={GroupBtnImg}></img>
                <button>match!</button>
            </div>
        </div>
        

    );
}

export default myGroup;
