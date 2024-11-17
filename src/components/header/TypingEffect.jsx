/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const TypingEffect = ({ text, typingSpeed = 100, cursorSpeed = 500 }) => {
  const [typedText, setTypedText] = useState("");
  const [isCursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let index = 0;

    const typingInterval = setInterval(() => {
      if (index < text.length-1) {
        setTypedText((prev) => prev + text[index]);
        index++;
      } else {
        clearInterval(typingInterval); // Stop typing when all text is typed
      }
    }, typingSpeed); // Speed of typing (in ms)

    // Cursor blinking effect
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, cursorSpeed); // Speed of cursor blink (in ms)

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, [text, typingSpeed, cursorSpeed]);

  return (
    <h6>
      &#34;{typedText}&#34;
      <span style={{ visibility: isCursorVisible ? "visible" : "hidden" }}>|</span>
    </h6>
  );
};

export default TypingEffect;
