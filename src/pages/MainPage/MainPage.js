import React, { useEffect, useState } from "react";
import "./MainPage.css";
import Header from "../../components/Header/Header";
import MainPoint from "../../components/MainPoint/MainPoint.js";
import MonthlyRank from "../../components/MonthlyRank/MonthlyRank";
import MyGroupRanking from "../../components/MyGroupRanking/MyGroupRanking";
import TopLayout from "../../components/MainPage/layout/top.layout";
import BottomLayout from "../../components/MainPage/layout/bottom.layout";
import OnceLayout from "../../components/MainPage/layout/once.layout";
import InfiniteScroll from "react-infinite-scroll-component";
import SecondTop from "../../components/MainPage/layout/secondtop.layout";
import axios from "axios";

function Main() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [dictionaryContents, setDictionaryContents] = useState([]); // API에서 가져온 데이터를 저장하는 상태
  const [currentIndex, setCurrentIndex] = useState(
    () => Math.floor(Math.random() * 34) + 1
  );
  const [topNGroups, setTopNGroups] = useState([]); // 추가: Top N 그룹 데이터를 저장하는 상태

  const fetchTopNGroups = async () => {
    try {
      const response = await axios.get("/api/v1/groups/top-n-groups", {
        params: {
          n: 5, // 5개의 그룹을 가져오기 위한 쿼리 파라미터
        },
      });
      setTopNGroups(response.data); // API에서 받은 그룹 데이터를 상태에 저장
      console.log("Top N 그룹 데이터 불러오기 성공");
      console.log(response.data);
    } catch (error) {
      console.error("Top N 그룹 데이터 불러오기 실패", error);
      // 실패한 경우에 대한 처리를 추가할 수 있습니다.
    }
  };

  function calculateDictIndex(currentIndex, index, dictionaryLength) {
    if (isNaN(currentIndex)) {
      setCurrentIndex(Math.floor(Math.random() * 34) + 1);
    }
    if (isNaN(currentIndex)) {
      setCurrentIndex(1);
    }
    currentIndex += 1;
    return (currentIndex + index) % dictionaryLength;
  }

  let dictIndex = currentIndex + 2;
  const checkLoginStatus = () => {
    return true;
  };

  const fetchMoreData = () => {
    const newData = [...items, ...Array.from({ length: 10 }, (_, i) => i + 1)];
    setItems(newData);
    setPage(page + 1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % dictionaryContents.length); // 1씩 증가
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/v1/dictionary"); // API 엔드포인트를 변경해야 할 수도 있습니다.
        setDictionaryContents(response.data);
        console.log("사전 데이터 불러오기 성공");
        console.log(response.data);
      } catch (error) {
        console.error("데이터 불러오기 실패", error);
        setDictionaryContents([
          {
            id: 1,
            word: "데이터 불러오기 실패:(",
            explanation: "데이터를 불러오지 못했습니다....:(",
          },
        ]);
      }
    };
    fetchData();
    setIsLoggedIn(checkLoginStatus());
  }, []);

  return (
    <div>
      <MainPoint />
      <div className="titleForMain">'깐부 내기 랭킹'</div>
      <div className="rankingSection">
        <MonthlyRank />
        {isLoggedIn && <MyGroupRanking />}
      </div>
      <div className="titleForMain">'당신을 위한 오늘의 증권 소식'</div>
      <div className="cardSection">
        <TopLayout
          dict={
            dictionaryContents[
              calculateDictIndex(currentIndex, 0, dictionaryContents.length)
            ]
          }
        />
        <OnceLayout />
        <BottomLayout
          dict={
            dictionaryContents[
              calculateDictIndex(currentIndex, 1, dictionaryContents.length)
            ]
          }
        />
      </div>

      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
        {" "}
        {items.map((item, index) => {
          dictIndex = dictIndex + 1;
          return (
            <div key={index} className="cardSection">
              <SecondTop
                dict={
                  dictionaryContents[
                    (dictIndex + index) % dictionaryContents.length
                  ]
                }
              />
              <BottomLayout
                dict={
                  dictionaryContents[
                    ((dictIndex + index) % dictionaryContents.length) + 1
                  ]
                }
              />
            </div>
          );
        })}
      </InfiniteScroll>
    </div>
  );
}

export default Main;
