import React from "react";
import { motion, useIsPresent } from "framer-motion";
import { useTranslation } from "react-i18next";

import "./projects.css";
import { projects } from "../../assets/data/projects";
import { Preview } from "../../components/";
import { CursorContext } from "../../context/CursorContext";
import { LoadingContext } from "../../context/LoadingContext";

export default function Projects() {
  const isPresent = useIsPresent();
  const [t, i18n] = useTranslation("global");
  const [preview, setPreview] = React.useState(null);
  const [name, setName] = React.useState(null);
  const { setCursorVariant } = React.useContext(CursorContext);
  const { setElements, setElementsLoaded } = React.useContext(LoadingContext);

  const setPreviewData = (project) => {
    if (project) {
      setPreview(project.image);
      setName(i18n.language === "en" ? project.en.name : project.es.name);
      setCursorVariant("txt");
    } else {
      setPreview(null);
      setName(null);
      setCursorVariant("default");
    }
  };

  React.useEffect(() => {
    setElements(1);
    
  }, []);

  return (
    <>
      <div className="projects-container">
        <div className="projects-content">
          <motion.div
            className="projects-content-left"
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2, ease: "easeInOut" }}
          >
            <Preview img={preview} name={name} />
          </motion.div>
          <motion.div
            className="projects-content-right"
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 + 0.5, ease: "easeInOut" }}
          >
            <div className="projects-content-right-header">
              <h1>{t("projects.title")}</h1>
              <p>{projects.length}</p>
            </div>
            <div className="projects-content-right-body">
              {projects.map((project) => (
                <motion.p
                  key={project.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.05,
                    delay: 0.5 + (0.2) * project.id,
                    ease: "easeInOut",
                  }}
                  onMouseOver={() => setPreviewData(project)}
                  onMouseLeave={() => setPreviewData(null)}
                >
                  {i18n.language === "en" ? project.en.name : project.es.name}
                </motion.p>
              ))}
            </div>
          </motion.div>
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
