import React from "react";
import "./MyGroupRanking.css";
import rank1 from "../../assets/images/character/rank1.png";
import rank2 from "../../assets/images/character/rank2.png";
import rank3 from "../../assets/images/character/rank3.png";
import rank4 from "../../assets/images/character/rank4.png";
import rank5 from "../../assets/images/character/rank5.png";

function MyGroupRanking() {
  const data = [
    {
      id: 1,
      alt: "랭킹 이미지 1",
      src: rank1,
      groupName: "그룹명 1",
      groupRate: "200%",
    },
    {
      id: 2,
      alt: "랭킹 이미지 2",
      src: rank2,
      groupName: "그룹명 2",
      groupRate: "199%",
    },
    {
      id: 3,
      alt: "랭킹 이미지 3",
      src: rank3,
      groupName: "그룹명 3",
      groupRate: "176%",
    },
    {
      id: 4,
      alt: "랭킹 이미지 3",
      src: rank4,
      groupName: "그룹명 4",
      groupRate: "146%",
    },
    {
      id: 5,
      alt: "랭킹 이미지 3",
      src: rank5,
      groupName: "그룹명 5",
      groupRate: "86%",
    },
  ];

  return (
    <div className="containerForGroupRanking">
      <div className="headForRanking">나의 깐부들 TOP5</div>
      <div className="medalList2">
        <div className="top1">
          <img alt={data[0].alt} src={data[0].src} />
          <div> {data[0].groupName} </div>
          <div> 수익률: {data[0].groupRate} </div>
        </div>
        <div className="top2">
          <img alt={data[1].alt} src={data[1].src} />
          <div> {data[1].groupName} </div>
          <div> 수익률: {data[1].groupRate} </div>
        </div>
        <div className="top3">
          <img alt={data[2].alt} src={data[2].src} />
          <div> {data[2].groupName} </div>
          <div> 수익률: {data[2].groupRate} </div>
        </div>
        <div className="top4">
          <img alt={data[3].alt} src={data[3].src} />
          <div> {data[3].groupName} </div>
          <div> 수익률: {data[3].groupRate} </div>
        </div>
        <div className="top5">
          <img alt={data[4].alt} src={data[4].src} />
          <div> {data[4].groupName} </div>
          <div> 수익률: {data[4].groupRate} </div>
        </div>
      </div>
    </div>
  );
}

export default MyGroupRanking;
