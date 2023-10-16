import React from 'react';
import NewBox from "../new-box";
import styles from '../styles/main-page.module.css'
import TodayQuizBox from "../today-quiz-box";
import DictionaryBox from "../dictionary-box";
const TopLayout = () => {
   //임의의 오늘의 퀴즈 데이터
   const StockQuiz = [
    {
      id: 1,
      content: "매수란 주식을 파는 것을 의미한다.",
      explanation: "주식을 파는 행위는 매도입니다.",
      answer: "x",
      isSolved: true,
    },
  ];

    return (
        <div className={styles.container}>
            <div className={styles.child_container}>
              <section className={styles.row_container}>
                <TodayQuizBox stockQuiz="StockQuiz"/>
                <NewBox/>
                <NewBox/>
                <NewBox/>
                <DictionaryBox/>
              </section>
            </div>
        </div>
    );
};

export default TopLayout;
