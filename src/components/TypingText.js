import React, { useState, useEffect } from "react";

const TypingText = ({ text, delay }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    const textLength = text.length;
    if (currentCharIndex < textLength) {
      const timer = setTimeout(() => {
        setDisplayText(text.slice(0, currentCharIndex + 1));
        setCurrentCharIndex(currentCharIndex + 1);
      }, delay);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [currentCharIndex, text, delay]);

  return <span>{displayText}</span>;
};

export default TypingText;
