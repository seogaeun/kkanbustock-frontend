import React from 'react';
import styles from './styles/new-box.module.css';
import commonStyles from './styles/main-page.module.css';

const NewsBox = ({ className, title, date, src }) => {
  const handleNewsClick = () => {
    if (src) {
      window.open(src, '_blank'); // 새 창에서 URL 열기
    }
  };

  return (
    <div
      className={`${className ?? commonStyles.short_box} ${styles.container}`}
      onMouseOver={() => document.body.style.cursor = 'pointer'} // 포인터로 마우스 모양 변경
      onMouseOut={() => document.body.style.cursor = 'auto'} // 기본 마우스 모양으로 변경
      onClick={handleNewsClick}
    >
      <section className={styles.header}>
        <div>{date ?? "2023.10.05"}</div>
        <div>news</div>
      </section>
      <section className={styles.footer}>
        <div>
          {title ?? "인디,\n사용자 경험 최고..."}
        </div>
      </section>
    </div>
  );
};

export default NewsBox;
