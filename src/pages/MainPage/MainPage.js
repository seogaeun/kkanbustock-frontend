import React, { useEffect, useState } from "react";
import "./MainPage.css";
import Header from "../../components/Header/Header";
import LL_together from "../../assets/images/LL_together.png";

function Main() {
  const [scrollOpacity, setScrollOpacity] = useState(1);
  const [head1, setHead1] = useState(""); // Text for head1
  const [head2, setHead2] = useState(""); // Text for head2

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const opacity = 1 - Math.min(scrollY / 500, 1);
      setScrollOpacity(opacity);
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
          }
        }, 100);
      }
    }, 100);
  }, []);

  const imageStyle = {
    transform: `translateY(${scrollOpacity * 100}px)`,
    opacity: scrollOpacity,
  };

  return (
    <div>
      <div className="firstPage">
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
