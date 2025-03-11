/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TypingEffect = ({ text, typingSpeed = 50, cursorSpeed = 500 }) => {
  const [typedText, setTypedText] = useState("");
  const [isCursorVisible, setCursorVisible] = useState(true);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    setTypedText("");
    setIsTypingComplete(false);

    const typingInterval = setInterval(() => {
      if (index < text.length) {
        setTypedText((prev) => prev + text[index]);
        index++;
      } else {
        clearInterval(typingInterval);
        setIsTypingComplete(true);
      }
    }, typingSpeed);

    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, cursorSpeed);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, [text, typingSpeed, cursorSpeed]);

  return (
    <motion.div
      className="typing-text"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <span className="quote">&#34;</span>
      <span className="text">{typedText}</span>
      <motion.span
        className="cursor"
        animate={{ opacity: isCursorVisible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        |
      </motion.span>
      <span className="quote">&#34;</span>
    </motion.div>
  );
};

export default TypingEffect;
