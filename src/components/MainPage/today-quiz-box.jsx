import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate를 불러옵니다.
import commonStyles from './styles/main-page.module.css';
import styles from './styles/today-quiz-box.module.css';

const TodayQuizBox = ({ content }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const navigate = useNavigate(); // useNavigate를 사용할 수 있도록 초기화

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const revealAnswer = () => {
    setIsAnswered(true);
  };

  const navigateToQuizPage = () => {
    // 클릭하면 '/quiz' 경로로 이동
    navigate('/quiz');
  };
  
  return (
    <div
      className={`${commonStyles.flex_box} ${styles.container} ${
        isFlipped ? styles.flipped : ''
      }`}
      onMouseEnter={flipCard}
      onMouseLeave={flipCard}
      onClick={navigateToQuizPage} // 클릭 이벤트 추가
    >
      <div className={styles.front}>
        <div className={styles.title}>오늘의 퀴즈</div>
        <div className={styles.content}>{content ?? "매도란 주식을 파는 것을 의미한다."}</div>
        <section className={styles.button_group}>
          <div className={styles.button_o} onClick={revealAnswer}>
            O
          </div>
          <div className={styles.button_x} onClick={revealAnswer}>
            X
          </div>
        </section>
      </div>
      <div className={styles.back}>
        <div className={styles.backContent}>
          카드를 눌러 <br /> <span className={styles.underline}>오늘의 퀴즈 풀러 가기</span> &gt;
        </div>      
      </div>
    </div>
  );
};

export default TodayQuizBox;
