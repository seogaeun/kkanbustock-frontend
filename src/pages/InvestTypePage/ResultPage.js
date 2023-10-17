import React from 'react';
import "./ResultPage.css";
import SOL_info from "./../../assets/images/SOL_info.png";
import BlueSmallBtn from '../../components/ButtonComponent/BlueSmallBtn';
import InvestTypeDescript from '../../components/InvestType/InvestTypeDescript';

let nickname="게스트";
let InvestType="위험중립형"

function InvestType_result() {
    return (
        <div className='center-container'>
            <div className='up-container'>
                    <div className='intro-title'>
                        <h2><span>{nickname}</span>님은</h2>
                        <h1><span className="InvestTypeText">{InvestType}</span> 입니다.</h1>
                    </div>
                    <img alt="안내하는 쏠" src={SOL_info}></img>
            </div>
            <div className='down'>
                <InvestTypeDescript InvestType={InvestType}></InvestTypeDescript>
            </div>
        </div>
    );
}

export default InvestType_result;
