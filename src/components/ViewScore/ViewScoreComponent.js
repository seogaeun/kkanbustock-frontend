import React from 'react';
import "./ViewScoreComponent.css";
import ViewMyScore from './ViewMyScore';
import ViewRivalScore from './ViewRivalScore';


function ViewScoreComponent() {
    return (
        <div className='componentWrap'>
            <div className="RivalPageTitle">깐부끼리, 수익률 내기 한판 할까?</div>

            <div className="scoreComponent">
                
                <ViewMyScore></ViewMyScore>
                <div className="versusCircle">
                    <div className='versusMent'>VS</div>
                </div>
                <ViewRivalScore></ViewRivalScore>
            </div>
        </div>
    );
}

export default ViewScoreComponent;
