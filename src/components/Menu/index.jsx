import React from "react";
import "./menu.css";
import { CursorContext } from "../../context/CursorContext";
import { Spin as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { LoadingContext } from "../../context/LoadingContext";

export default function Menu() {
  const { setCursorVariant, setMenuOpen } = React.useContext(CursorContext);
  const [open, setOpen] = React.useState(false);
  const [menuState, setMenuState] = React.useState("closed");
  const [t, i18n] = useTranslation("global");
  const [language, setLanguage] = React.useState(
    localStorage.getItem("language") || "en"
  );
  const { setLoading, setElementsLoaded, setElements } =
    React.useContext(LoadingContext);
  const [showGoBack, setShowGoBack] = React.useState(false);

  let navigate = useNavigate();
  let location = window.location.pathname;

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

  React.useEffect(() => {
    if (location !== "/") {
      setTimeout(() => {
        setShowGoBack(true);
      }, 500);
    } else {
      setTimeout(() => {
        setShowGoBack(false);
      }, 500);
    }
  }, [location]);

  const changeLanguage = (lng) => {
    if (lng === language) return;
    setLoading(true);
    setElementsLoaded(0);
    setElements(1);
    setTimeout(() => {
      i18n.changeLanguage(lng);
      setLanguage(lng);
      localStorage.setItem("language", lng);
      setElementsLoaded(1);
    }, 500);
  };

  const menuItems = [
    {
      title: t("menu.home"),
      link: "/",
    },
    {
      title: t("menu.about"),
      link: "/about",
    },
    {
      title: t("menu.projects"),
      link: "/projects",
    },
    {
      title: t("menu.contact"),
      link: "/contact",
    },
  ];

  const goTo = (link) => {
    handleMenu();
    if (link === location) return;
    setElementsLoaded(0);
    setElements(100);
    setLoading(true);
    navigate(link);
    goToTop();
  };

  const goBack = () => {
    setElementsLoaded(0);
    setElements(100);
    setLoading(true);
    navigate(-1);
    goToTop();
  };

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className={location.length >= 11 ? "menu-container menu-container-background" : "menu-container"}>
        {showGoBack && (
          <div
            className="menu-item goBackArrow"
            onMouseEnter={() => setCursorVariant("img")}
            onMouseLeave={() => setCursorVariant("default")}
            onClick={goBack}
          >
            <i className="fa-solid fa-arrow-left"></i>
          </div>
        )}
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
          <Hamburger toggled={open} />
        </div>
      </div>
      <motion.div
        className={open ? "menu-content" : "menu-content menu-content-close"}
        variants={variants}
        animate={menuState}
        style={{ right: "-100%", width: "50%" }}
      >
        <div className="menu-content-items">
          {menuItems.map((item, index) => (
            <motion.div
              className="menu-content-item"
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <p
                onClick={() => goTo(item.link)}
                onMouseEnter={() => setCursorVariant("txt")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
}
