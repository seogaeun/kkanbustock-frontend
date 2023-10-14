import React, { useEffect, useState } from "react";
import "./MainPoint.css";
import LL_together from "../../assets/images/LL_together.png";
import arrowImage from "../../assets/images/arrow2.png"; // Arrow 이미지 파일 경로

function MainPoint() {
  const [scrollOpacity, setScrollOpacity] = useState(1);
  const [head1, setHead1] = useState("");
  const [head2, setHead2] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("black"); // 배경색 상태 추가
  const [isArrowVisible, setIsArrowVisible] = useState(false); // 화살표 표시 여부 상태 추가

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const opacity = 1 - Math.min(scrollY / 300, 1);
      setScrollOpacity(opacity);

      // 스크롤 위치에 따라 배경색 변경
      if (scrollY > 200) {
        setBackgroundColor("white");
      } else {
        setBackgroundColor("black");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Typing effect for head1
    const text1 = '"깐부끼리, 수익률 내기 한판 할까?"';
    let i = 0;
    const interval1 = setInterval(() => {
      if (i <= text1.length) {
        setHead1(text1.substring(0, i));
        i++;
      } else {
        clearInterval(interval1);
        // Typing effect for head2
        const text2 = "경쟁을 통해 성장하는, 깐부주식";
        let j = 0;
        const interval2 = setInterval(() => {
          if (j <= text2.length) {
            setHead2(text2.substring(0, j));
            j++;
          } else {
            clearInterval(interval2);
            // 화살표 표시
            setIsArrowVisible(true);
          }
        }, 100);
      }
    }, 100);
  }, []);

  const imageStyle = {
    transform: `translateY(${scrollOpacity * 500}px)`,
    opacity: scrollOpacity,
  };

  return (
    <div className="main-point" style={{ backgroundColor: backgroundColor }}>
      <div className="container">
        <img
          className="bouncing-image"
          src={LL_together}
          alt="Bouncing Image"
          style={imageStyle}
        />
      </div>
      <div className="head1">{head1}</div>
      <div className="head2">{head2}</div>
      {isArrowVisible && (
        <img src={arrowImage} alt="Arrow Image" className="arrow-image" />
      )}
    </div>
  );
}

export default MainPoint;
