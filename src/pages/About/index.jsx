import React from "react";
import "./about.css";
import meImg from "../../assets/img/me2.png";
//import flag from "../../assets/img/colombia.png";
import { CursorContext } from "../../context/CursorContext";
import { useTranslation } from "react-i18next";
import { motion, useIsPresent } from "framer-motion";
import { skills } from "../../assets/data/skills";
import DiscordPresence from "../../components/DiscordPresence";

export default function About() {
  const { setCursorVariant } = React.useContext(CursorContext);
  const [t, i18n] = useTranslation("global");
  const isPresent = useIsPresent();

  return (
    <>
      <div className="about-main-container">
        <div className="about-container">
          <motion.div
            className="about-profile-card"
            initial={{ opacity: 0, y: 250 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="about-profile-card-image">
              <img
                loading="lazy"
                src={meImg}
                alt="Orlando Mina"
                draggable="false"
              />
            </div>
            <div className="about-profile-card-name">
              <h1
                onMouseEnter={() => setCursorVariant("txt")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                Orlando Mina Madroñero
              </h1>
            </div>
            <hr />
            <div className="about-profile-card-info">
              <div className="about-profile-card-info-item">
                <h5>{t("about.text")}</h5>
              </div>
              <div className="about-profile-card-info-item">
                <p>{t("about.born")}:</p>
                <span>{t("about.born-text")}</span>
                {/* <img src={flag} alt="🇨🇴" /> */}
              </div>
              <div className="about-profile-card-info-item">
                <p>{t("about.education")}:</p>
                <span>{t("about.education-text")}</span>
              </div>
              <div className="about-profile-card-info-socials">
                <a
                  href="https://github.com/Orloxx23"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setCursorVariant("txt")}
                  onMouseLeave={() => setCursorVariant("default")}
                >
                  <div className="about-profile-card-info-social">
                    <i className="fab fa-github"></i>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/orlandomm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setCursorVariant("txt")}
                  onMouseLeave={() => setCursorVariant("default")}
                >
                  <div className="about-profile-card-info-social">
                    <i className="fab fa-linkedin"></i>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
          <div className="more-about-container">
            <motion.h1
              initial={{ opacity: 0, x: 250 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              {t("about.title")}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, x: 250 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="about-bio-container"
            >
              <div className="about-bio-content">{t("about.bio")}</div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, x: 250 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              {t("about.skills")}
            </motion.h1>
            <div className="more-about-skills-items">
              {skills.map((skill) => (
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: skill.id * 0.1 }}
                  className="more-about-skills-item"
                  key={skill.id}
                >
                  <i
                    className={skill.icon}
                    onMouseEnter={() => setCursorVariant("txt")}
                    onMouseLeave={() => setCursorVariant("default")}
                  ></i>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="more-about-last-container"
            >
              <motion.div
                className="drag"
                drag
                dragConstraints={{
                  top: -0,
                  left: -0,
                  right: 0,
                  bottom: 0,
                }}
              >
                <DiscordPresence />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="privacy-screen"
      />
    </>
  );
}
