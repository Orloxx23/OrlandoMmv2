import React from "react";
import "./menu.css";
import { CursorContext } from "../../context/CursorContext";
import { Spin as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Menu() {
  const { setCursorVariant, setMenuOpen } = React.useContext(CursorContext);
  const [open, setOpen] = React.useState(false);
  const [menuState, setMenuState] = React.useState("closed");
  const [t, i18n] = useTranslation("global");
  const [language, setLanguage] = React.useState(
    localStorage.getItem("language")
  );

  const handleMenu = () => {
    setOpen(!open);
    setMenuOpen(!open);
    setMenuState(open ? "closed" : "open");
  };

  const variants = {
    open: {
      right: "0",
    },
    closed: {
      right: "-100%",
    },
  };

  React.useEffect(() => {
    i18n.changeLanguage(language);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
    localStorage.setItem("language", lng);
  };

  return (
    <>
      <div className="menu-container">
        <div
          className="menu-item"
          onMouseEnter={() => setCursorVariant("img")}
          onMouseLeave={() => setCursorVariant("default")}
        >
          <div className="select-language">
            <button
              className={language === "en" ? "language-active" : ""}
              onClick={() => changeLanguage("en")}
            >
              EN
            </button>
            <button
              className={language === "es" ? "language-active" : ""}
              onClick={() => changeLanguage("es")}
            >
              ES
            </button>
          </div>
        </div>
        <div
          onClick={handleMenu}
          className="menu-item menu-item-hover menu-item-hamburger"
          onMouseEnter={() => setCursorVariant("img")}
          onMouseLeave={() => setCursorVariant("default")}
        >
          <Hamburger />
        </div>
      </div>
      <motion.div
        className={open ? "menu-content" : "menu-content-close"}
        variants={variants}
        animate={menuState}
        style={{ right: "-100%", width: "50%" }}
      ></motion.div>
    </>
  );
}
