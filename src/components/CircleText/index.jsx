import React from "react";
import { CursorContext } from "../../context/CursorContext";
import "./circleText.css";
import { motion } from "framer-motion";
import { LoadingContext } from "../../context/LoadingContext";

export default function CircleText({ text, content, alpha }) {
  const { setCursorVariant } = React.useContext(CursorContext);
  const { elements, elementsLoaded, setElementsLoaded } = React.useContext(LoadingContext);
  const lenght = text.length;
  const deg = 360 / lenght;

  return (
    <div className="spinning-text-wrapper">
      <div className="spining-text-content">
        {content ? (
          <motion.img
            loading="lazy"
            draggable="false"
            src={content}
            alt="Orlando Mina"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: [0, 1.3, 1] }}
            transition={{ duration: 0.8 }}
            onLoad={() => setElementsLoaded(elements && elementsLoaded + 1)}
            onMouseEnter={() => setCursorVariant("img")}
            onMouseLeave={() => setCursorVariant("default")}
          />
        ) : !alpha ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            onMouseEnter={() => setCursorVariant("img")}
            onMouseLeave={() => setCursorVariant("default")}
            className="spining-text-no-content"
          ></motion.div>
        ) : null}
      </div>
      <motion.div
        className="spinning-text"
        onMouseEnter={() => setCursorVariant("txt")}
        onMouseLeave={() => setCursorVariant("default")}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.5 }}
      >
        <p>
          {text.split("").map((letter, i) => (
            <span
              key={i}
              style={{
                transform: `rotate(${deg * i}deg)`,
              }}
            >
              {letter}
            </span>
          ))}
        </p>
      </motion.div>
    </div>
  );
}
