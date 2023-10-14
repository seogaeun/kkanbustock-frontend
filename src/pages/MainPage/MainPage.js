import React, { useEffect, useState } from "react";
import "./MainPage.css";
import Header from "../../components/Header/Header";
import MainPoint from "../../components/MainPoint/MainPoint";
import MonthlyRank from "../../components/MonthlyRank/MonthlyRank";
import MyGRoupRanking from "../../components/MyGroupRanking/MyGroupRanking";

function Main() {
  // 유저 로그인 상태를 관리하는 상태 변수
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // 유저 로그인 여부를 확인하는 함수
  const checkLoginStatus = () => {
    // 실제 로그인 상태 확인 로직을 구현할 예정
    // 여기에서는 간단히 false를 반환하는 예시를 사용합니다.
    return true;
  };

  useEffect(() => {
    // 컴포넌트가 마운트될 때 로그인 상태 확인
    setIsLoggedIn(checkLoginStatus());
  }, []);

  return (
    <div>
      <MainPoint />
      <div className="rankingSection">
        <MonthlyRank />
        {isLoggedIn && <MyGRoupRanking />}
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
