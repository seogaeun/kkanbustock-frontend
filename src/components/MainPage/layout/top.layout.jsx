import React from 'react';
import NewBox from "../new-box";
import styles from '../styles/main-page.module.css'
import TodayQuizBox from "../today-quiz-box";
import DictionaryBox from "../dictionary-box";
const TopLayout = () => {
    return (
        <div className={styles.container}>
            <div className={styles.child_container}>
              <section className={styles.row_container}>
                <TodayQuizBox/>
                <DictionaryBox/>
                <NewBox/>
                <NewBox/>
                <NewBox/>
              </section>
            </div>
        </div>
    );
};

export default TopLayout;
