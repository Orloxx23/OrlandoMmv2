import React from "react";
import { useTranslation } from "react-i18next";
import { CircleText, DiscordPresence } from "../../components";
import "./contact.css";
import { motion, useIsPresent } from "framer-motion";
import { CursorContext } from "../../context/CursorContext";
import { LoadingContext } from "../../context/LoadingContext";

export default function Contact() {
  const [t, i18n] = useTranslation("global");
  const isPresent = useIsPresent();
  const { setCursorVariant, menuOpen } = React.useContext(CursorContext);
  const [move, setMove] = React.useState(menuOpen);
  const { setLoading, setElements } = React.useContext(LoadingContext);

  const sites = [
    {
      name: "Github",
      url: "https://github.com/Orloxx23",
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/orlandomm/",
    },
  ];

  React.useEffect(() => {
    setMove(menuOpen);
  }, [menuOpen]);

  React.useEffect(() => {
    setElements(1);
    setLoading(isPresent);
  }, []);

  const variants = {
    default: {
      left: "0",
    },
    menuOpen: {
      left: "-46%",
    },
  };

  return (
    <>
      <motion.div
        className="contact-container"
        variants={variants}
        animate={move ? "menuOpen" : "default"}
      >
        <div className="contact-left">
          <CircleText text={t("contact.circleText")} alpha={false} />
        </div>
        <div className="contact-right">
          <div className="contact-right-container">
            <div className="contact-right-item">
              <motion.h5
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: 0 + 0.5 },
                }}
              >
                <span
                  onMouseEnter={() => setCursorVariant("txt")}
                  onMouseLeave={() => setCursorVariant("default")}
                >
                  {t("contact.email")}
                </span>
              </motion.h5>
              <a
                href="mailto:orminamadro@gmail.com"
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => setCursorVariant("img")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                <motion.p
                  initial={{ opacity: 0, y: -20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, delay: 0.2 + 0.5},
                  }}
                >
                  orminamadro@gmail.com{" "}
                  <i className="fa-solid fa-arrow-turn-up"></i>
                </motion.p>
              </a>
            </div>
            <div className="contact-right-item">
              <motion.h5
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: 0.4 + 0.5},
                }}
              >
                <span
                  onMouseEnter={() => setCursorVariant("txt")}
                  onMouseLeave={() => setCursorVariant("default")}
                >
                  {t("contact.other")}
                </span>
              </motion.h5>
              <div className="contact-right-item-sites">
                <div className="contact-right-item-sites-left">
                  {sites.map((site, index) => (
                    <a
                      key={index}
                      href={site.url}
                      target="_blank"
                      rel="noreferrer"
                      onMouseEnter={() => setCursorVariant("img")}
                      onMouseLeave={() => setCursorVariant("default")}
                    >
                      <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          transition: { delay: 0.6 + 0.5 },
                        }}
                      >
                        <span>{site.name}</span>
                        <i className="fa-solid fa-arrow-turn-up"></i>
                      </motion.p>
                    </a>
                  ))}
                </div>
                <div className="contact-right-item-sites-right">
                  <DiscordPresence showNick={true} />
                </div>
              </div>
            </div>
          </div>
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
