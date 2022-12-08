import React from "react";
import "./about.css";
import meImg from "../../assets/img/me2.png";
//import flag from "../../assets/img/colombia.png";
import { CursorContext } from "../../context/CursorContext";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function About() {
  const { setCursorVariant } = React.useContext(CursorContext);
  const [t, i18n] = useTranslation("global");
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
              <img src={meImg} alt="Orlando Mina" draggable="false" />
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
        </div>
      </div>
    </>
  );
}
