import React from 'react';
import "./ViewScoreComponent.css";
import ViewMyScore from './ViewMyScore';
import ViewRivalScore from './ViewRivalScore';


function ViewScoreComponent() {
    return (
        <div className='componentWrap'>
            <div className="scoreComponent">
                <ViewMyScore></ViewMyScore>
                <ViewRivalScore></ViewRivalScore>
            </div>
        </div>
    );
}

export default ViewScoreComponent;
