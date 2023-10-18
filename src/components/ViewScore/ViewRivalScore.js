import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./ViewRivalScore.css";
import ViewScoreInfo from './ViewScoreInfo';
import PLI_GO from './../../assets/images/PLI_GO.png';

function ViewRivalScore({guestId,totalProfitRate,matchResult}) {

    const ribalSadariggolClass = matchResult === 'win' ? 'winClass' : (matchResult === 'loss' ? 'lossClass' : 'defaultClass');


    return (
        <div className='componentWrap'>
            <div className={`ribalSadariggol ${ribalSadariggolClass}`}>
                <img alt="SOL" src={PLI_GO}></img>
                <div className='rivalScoreInfo'>
                    <ViewScoreInfo who= "RIVAL" nickname={guestId} totalProfitRate={totalProfitRate} matchResult={matchResult} ></ViewScoreInfo>
                </div>
            </div>
        </div>
    );
}

export default ViewRivalScore;
