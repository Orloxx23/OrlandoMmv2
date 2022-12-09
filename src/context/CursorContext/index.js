import React from "react";
import { motion } from "framer-motion";
import "./cursor.css";

const CursorContext = React.createContext();

function CursorProvider(props) {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = React.useState("default");

  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  React.useEffect(() => {
    const prev = cursorVariant;
    const mouseClick = () => {
      setCursorVariant("click");
      setTimeout(() => {
        setCursorVariant(prev);
      }, 100);
    };

    window.addEventListener("mousedown", mouseClick);

    return () => {
      window.removeEventListener("mousedown", mouseClick);
    };
  }, [cursorVariant]);

  const variants = {
    default: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      rotate: 180,
    },
    txt: {
      x: mousePosition.x - 30,
      y: mousePosition.y - 30,
      rotate: 360,
      background: "white",
      width: 60,
      height: 60,
      mixBlendMode: "difference",
    },
    img: {
      x: mousePosition.x - 6,
      y: mousePosition.y - 6,
      rotate: 360,
      width: 12,
      height: 12,
    },
    click: {
      x: mousePosition.x - 25,
      y: mousePosition.y - 25,
      width: 50,
      height: 50,
      rotate: -360,
    },
    dark: {
      x: mousePosition.x - 6,
      y: mousePosition.y - 6,
      rotate: 360,
      width: 12,
      height: 12,
      border: "2px dashed #303030",
    }
  };

  return (
    <CursorContext.Provider
      value={{
        variants,
        cursorVariant,
        setCursorVariant,
        menuOpen,
        setMenuOpen,
      }}
    >
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
        transition={{ ease: "backOut" }}
        style={{ background: "transparent" }}
      />
      {props.children}
    </CursorContext.Provider>
  );
}

export { CursorContext, CursorProvider };
