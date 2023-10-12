import React from 'react';
import "./ViewMyScore.css";
import ViewScoreInfo from './ViewScoreInfo';
import SOL_GO from "./../../assets/images/SOL_GO.png";


function ViewMyScore({nickname, totalProfitRate}) {
    nickname = "서가돌";
    totalProfitRate = 100;

    return (
        <div className='componentWrap'>
            <div className='mySadariggol'>
                <div className='myScoreInfo'>
                    <ViewScoreInfo who= "ME" nickname={nickname} totalProfitRate={totalProfitRate}  ></ViewScoreInfo>
                </div>
                <img alt="SOL" src={SOL_GO}></img>
            </div>
        </div>
    );
}

export default ViewMyScore;
