import React from "react";
import "./RankingCard.css";

function RankingCard(props) {
  return (
    <div>
      <div className="container2">
        <img alt={props.alt} src={props.src} />
        <div> 그룹명 </div>
        <div> {props.groupName} </div>
        <div> 수익률 </div>
        <div> {props.groupRate} </div>
      </div>
    </div>
  );
}

export default RankingCard;
