import React from "react";
import { CircleText } from "../../components";
import "./coverpage.css";
import meImg from "../../assets/img/me.png";
import { CursorContext } from "../../context/CursorContext";
import { useTranslation } from "react-i18next";
import { motion, useIsPresent } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { LoadingContext } from "../../context/LoadingContext";

export default function Coverpage() {
  const { setCursorVariant, menuOpen } = React.useContext(CursorContext);
  const { setLoading, setElements } = React.useContext(LoadingContext);
  const [t, i18n] = useTranslation("global");
  const [move, setMove] = React.useState(menuOpen);

  const isPresent = useIsPresent();

  React.useState(() => {
    setElements(1);
    setLoading(isPresent);
  }, []);

  React.useEffect(() => {
    setMove(menuOpen);
  }, [menuOpen]);

  const variants = {
    default: {
      left: "0",
    },
    menuOpen: {
      left: "-50%",
    },
  };

  let navigate = useNavigate();
  let location = window.location.pathname;
  const goTo = (link) => {
    if (link === location) return;
    setLoading(true);
    navigate(link);
  };

  return (
    <>
      <motion.div
        className="coverpage no-scrolleable"
        variants={variants}
        animate={move ? "menuOpen" : "default"}
      >
        <div className="coverpage-left">
          <div className="coverpage-left-info">
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: 0.3 + 0.5,
                ease: "easeInOut",
              }}
              onMouseEnter={() => setCursorVariant("txt")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              {t("coverpage.title")}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: 0.5 + 0.5,
                ease: "easeInOut",
              }}
            >
              {/* {t("coverpage.about")} */}
              {i18n.language === "es" ? (
                <>
                  Soy <b>desarrollador frontend</b> con experiencia en{" "}
                  <b>React</b>. Soy bueno en <b>CSS</b> y <b>HTML</b>, así como
                  en <b>JavaScript.</b> Me encanta aprender cosas nuevas y
                  experimentar con nuevas tecnologías. Tengo buen ojo para los
                  detalles y siempre pongo todo de mi en mi trabajo."
                </>
              ) : (
                <>
                  I am a <b>frontend developer</b> with experience in{" "}
                  <b>React</b>. I'm good at <b>HTML</b> and <b>CSS</b>, as well
                  as <b>JavaScript</b>. I love learning new things and
                  experimenting with new technologies. I have a good eye for
                  details and I always put my all into my work.
                </>
              )}
            </motion.p>
            <div className="fast-access">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.2,
                  delay: 0.8 + 0.5,
                  ease: "easeInOut",
                }}
                className="fast-access-item"
                onClick={() => goTo("/projects")}
                onMouseEnter={() => setCursorVariant("txt")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                <i className="fa-solid fa-arrow-right-long"></i>
                <span>{t("coverpage.projects")}</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.2,
                  delay: 1.2 + 0.5,
                  ease: "easeInOut",
                }}
                className="fast-access-item"
                onClick={() => goTo("/about")}
                onMouseEnter={() => setCursorVariant("txt")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                <i className="fa-solid fa-arrow-right-long"></i>
                <span>{t("coverpage.moreMe")}</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.2,
                  delay: 1.6 + 0.5,
                  ease: "easeInOut",
                }}
                className="fast-access-item"
                onClick={() => goTo("/contact")}
                onMouseEnter={() => setCursorVariant("txt")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                <i className="fa-solid fa-arrow-right-long"></i>
                <span>{t("coverpage.contact")}</span>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="coverpage-right">
          <CircleText text={t("coverpage.circleText")} content={meImg} />
        </div>
      </motion.div>
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0, transition: { duration: 0.5, ease: "circOut" } }}
        exit={{ scaleY: 1, transition: { duration: 0.5, ease: "circIn" } }}
        style={{ originY: isPresent ? 0 : 1 }}
        className="privacy-screen"
      />
    </>
  );
}
