import React from 'react';
import "./ViewRivalScore.css";
import ViewScoreInfo from './ViewScoreInfo';
import PLI_GO from './../../assets/images/PLI_GO.png';

function ViewRivalScore({nickname, totalProfitRate}) {
    nickname = "--";
    totalProfitRate = "--";

    return (
        <div className='componentWrap'>
            <div className='ribalSadariggol'>
                <img alt="SOL" src={PLI_GO}></img>
                <div className='rivalScoreInfo'>
                    <ViewScoreInfo who= "RIVAL" nickname={nickname} totalProfitRate={totalProfitRate}  ></ViewScoreInfo>
                </div>
            </div>
        </div>
    );
}

export default ViewRivalScore;
