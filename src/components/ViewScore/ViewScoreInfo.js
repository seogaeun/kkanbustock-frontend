import React from 'react';
import "./ViewScoreInfo.css";


function ViewScoreInfo({who, nickname, totalProfitRate }) {
    const style = who.toUpperCase() == "RIVAL" ? 'end' : 'start';

    return (
      <div className='infoComponentWrap'>
        <h2 style={{ textAlign: style }}>{who}</h2>
        <h3 style={{ textAlign: style }}>{nickname}</h3>
        <h3 style={{ textAlign: style }}>수익률 {totalProfitRate}%</h3>
      </div>
    );
    
}

export default ViewScoreInfo;
