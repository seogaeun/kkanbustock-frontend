import React, { useState, useEffect } from 'react';
import "./ViewMyScore.css";
import ViewScoreInfo from './ViewScoreInfo';
import SOL_GO from "./../../assets/images/SOL_GO.png";
import axios from 'axios';
const data="확인 불가";
function ViewMyScore({ memberId , totalProfitRate, matchResult }) {


    const mySadariggolClass = matchResult === 'win' ? 'winClass' : (matchResult === 'loss' ? 'lossClass' : 'defaultClass');


    return (
        <div className='componentWrap'>
            <div className={`mySadariggol ${mySadariggolClass}`}>
                <div className='myScoreInfo'>
                    <ViewScoreInfo who="ME" nickname={memberId} totalProfitRate={totalProfitRate} matchResult={matchResult}/>
                </div>
                <img alt="SOL" src={SOL_GO} />
            </div>
        </div>
    );
}

export default ViewMyScore;
