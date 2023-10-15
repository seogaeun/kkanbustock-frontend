import React from 'react';
import styles from "../styles/main-page.module.css";
import TodayQuizBox from "../today-quiz-box";
import NewBox from "../new-box";
import DictionaryBox2 from '../dictionaty-box2';

const BottomLayout = () => {
    return (
        <div className={styles.container}>
            <div className={styles.child_container}>
                <section className={styles.row_container}>
                    <NewBox/>
                    <NewBox/>
                    <NewBox/>
                    <NewBox/>
                    <DictionaryBox2/>
                </section>
            </div>
        </div>
    );
};

export default BottomLayout;
