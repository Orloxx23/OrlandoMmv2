import React from "react";
import { motion } from "framer-motion";

import "./loadScreen.css";
import { CursorContext } from "../../context/CursorContext";
import { LoadingContext } from "../../context/LoadingContext";

export default function LoadScreen() {
  const { setCursorVariant } = React.useContext(CursorContext);
  const {
    loading,
    setLoading,
    elements,
    elementsLoaded,
    setElementsLoaded,
    setElements,
  } = React.useContext(LoadingContext);
  const [progress, setProgress] = React.useState(1);
  const [show, setShow] = React.useState("show");

  React.useEffect(() => {
    if (loading) {
      setShow("show");
      if (elements > 0 && elementsLoaded === elements) {
        setTimeout(() => {
          setLoading(false);
          setShow("hide");
          setElementsLoaded(0);
          setElements(100);
        }, 500);
      }
    } else {
      setShow("hide");
      setElementsLoaded(0);
      setElements(100);
    }
    console.log(elementsLoaded + "/" + elements);
  }, [
    loading,
    elementsLoaded,
    elements,
    setLoading,
    setElementsLoaded,
    setElements,
  ]);

  React.useEffect(() => {
    setProgress(
      (elementsLoaded / elements) * 100 > 100
        ? 100
        : (elementsLoaded / elements) * 100
    );
  }, [elementsLoaded, elements]);

  const variantes = {
    hide: {
      y: "100%",
      display: "none",
    },
    show: {
      y: 0,
    },
  };

  return (
    <motion.div
      className="load-screen-container"
      variants={variantes}
      animate={show}
      transition={{ duration: 0.5 }}
      style={{ overflow: "hidden", display: "flex" }}
    >
      <div className="load-screen-content">
        <div className="loader-text">
          <div
            className="loader"
            onMouseEnter={() => setCursorVariant("txt")}
            onMouseLeave={() => setCursorVariant("default")}
          >
            <span>OrlandoMm</span>
            <span>OrlandoMm</span>
          </div>
        </div>
        <div className="progress-bar">
          <div className="progress">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: progress + "%" }}
              className="color"
            ></motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
