import React from "react";
import TypingText from "../TypingText";
import LL_together from "../../assets/images/LL_together.png";

const MainPoint = ({ scrollOpacity, showHead2 }) => {
  return (
    <div className="firstPage">
      <div className="container">
        <img
          className="bouncing-image"
          src={LL_together}
          alt="Bouncing Image"
          style={{
            transform: `translateY(${scrollOpacity * 100}px)`,
            opacity: scrollOpacity,
          }}
        />
      </div>
      <div className="head1">
        <TypingText text='"깐부끼리, 수익률' delay={200} />
      </div>
      {showHead2 && (
        <div className="head2">
          <TypingText text='거기서부터 끝까지"' delay={200} />
        </div>
      )}
    </div>
  );
};

export default MainPoint;
