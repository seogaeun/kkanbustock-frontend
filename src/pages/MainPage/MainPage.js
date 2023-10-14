import React, { useEffect, useState } from "react";
import "./MainPage.css";
import Header from "../../components/Header/Header";
import MainPoint from "../../components/MainPoint/MainPoint";
import MonthlyRank from "../../components/MonthlyRank/MonthlyRank";
import MyGRoupRanking from "../../components/MyGroupRanking/MyGroupRanking";

function Main() {
  return (
    <div>
      <MainPoint />
      <div>
        <MonthlyRank />
        <MyGRoupRanking />
      </div>
      <Header name="안녕~" />
      <Header name="안녕~" />
      <Header name="안녕~" />
      <Header name="안녕~" />
      <Header name="안녕~" />
      <Header name="안녕~" />
    </div>
  );
}

export default Main;
