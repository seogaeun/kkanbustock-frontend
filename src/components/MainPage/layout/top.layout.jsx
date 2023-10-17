import React, { useEffect, useState } from 'react';
import NewsBox from "../news-box";
import styles from '../styles/main-page.module.css';
import TodayQuizBox from "../today-quiz-box";
import DictionaryBox from "../dictionary-box";
import axios from 'axios';

const TopLayout = ({ dict }) => {
    const userId = 'choi'; // 예를 들어 userId를 하드코딩하거나 props로 가져옵니다.
    // const [news, setNews] = useState([]); // 뉴스 데이터를 저장할 상태 변수

    // const getNews = async (query) => {
    //     try {
    //         const response = await axios.get(`https://13fe-123-254-143-22.ngrok-free.app/news?query=${query}`);
    //         const newsData = response.data;
    //         setNews(newsData); // 뉴스 데이터를 상태에 저장
    //         console.error('뉴스 가져오기 성공', newsData);

    //     } catch (error) {
    //         console.error('뉴스 가져오기 실패', error);
    //     }
    // }

    // useEffect(() => {
    //     getNews('주식');
    // }, []); // 컴포넌트 마운트 시 한 번 호출

    return (
        <div className={styles.container}>
            <div className={styles.child_container}>
                <section className={styles.row_container}>
                    <TodayQuizBox memberId={userId} />
                    <NewsBox />
                    <NewsBox />
                    <NewsBox />
                    <DictionaryBox dict={dict} />
                </section>
            </div>
        </div>
    );
};

export default TopLayout;
