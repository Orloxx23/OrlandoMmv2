import React from "react";
import { CircleText } from "../../components";
import "./coverpage.css";
import meImg from "../../assets/img/me.png";
import { CursorContext } from "../../context/CursorContext";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function Coverpage() {
  const { setCursorVariant, menuOpen } = React.useContext(CursorContext);
  const [t, i18n] = useTranslation("global");
  const [move, setMove] = React.useState(menuOpen);

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

  return (
    <>
      <motion.div
        className="coverpage"
        variants={variants}
        animate={move ? "menuOpen" : "default"}
      >
        <div className="coverpage-left">
          <div className="coverpage-left-info">
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3, ease: "easeInOut" }}
              onMouseEnter={() => setCursorVariant("txt")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              {t("coverpage.title")}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.6, ease: "easeInOut" }}
            >
              {t("coverpage.about")}
            </motion.p>
          </div>
        </div>
        <div className="coverpage-right">
          <CircleText text={t("coverpage.circleText")} content={meImg} />
        </div>
      </motion.div>
    </>
  );
}
