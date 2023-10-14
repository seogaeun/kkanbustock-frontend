import React from 'react';
import commonStyles from './styles/main-page.module.css';
import styles from './styles/today-quiz-box.module.css';
const TodayQuizBox = ({content}) => {
  return (
      <div className={`${commonStyles.flex_box} ${styles.container}`}>
        <div className={styles.title}>오늘의 퀴즈</div>
        <div className={styles.content}>{content ?? "매도란 주식을 파는 것을 의미한다."}</div>
        <section className={styles.button_group}>
          <div className={styles.button_o}>O</div>
          <div className={styles.button_x}>X</div>
        </section>
      </div>
  );
};

export default TodayQuizBox;
