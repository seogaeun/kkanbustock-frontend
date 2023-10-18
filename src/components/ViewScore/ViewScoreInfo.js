import React from 'react';
import "./ViewScoreInfo.css";


function ViewScoreInfo({ who, nickname = "--", totalProfitRate = "--", matchResult }) {
  const style = who.toUpperCase() === "RIVAL" ? 'end' : 'start';
  const winStyle = matchResult === 'win' ? { color: '#FFEE95', fontSize: '30px' } : {};

  return (
    <div className='infoComponentWrap'>
      <h2 style={{ textAlign: style, ...winStyle }}>{who}{matchResult === 'win' && ' win!'}</h2>
      <h3 style={{ textAlign: style }}>{nickname}</h3>
      <h3 style={{ textAlign: style }}>수익률 {totalProfitRate}%</h3>
    </div>
  );
}


export default ViewScoreInfo;
