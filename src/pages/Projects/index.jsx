import React from "react";
import { motion, useIsPresent } from "framer-motion";
import { useTranslation } from "react-i18next";

import "./projects.css";
import { projects } from "../../assets/data/projects";
import { Preview } from "../../components/";
import { CursorContext } from "../../context/CursorContext";
import { LoadingContext } from "../../context/LoadingContext";
import { useNavigate } from "react-router-dom";

export default function Projects() {
  const isPresent = useIsPresent();
  const [t, i18n] = useTranslation("global");
  const [preview, setPreview] = React.useState(null);
  const [name, setName] = React.useState(null);
  const { setCursorVariant } = React.useContext(CursorContext);
  const { setLoading, setElements } = React.useContext(LoadingContext);

  let navigate = useNavigate();
  let location = window.location.pathname;

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
    setLoading(isPresent);
  }, []);

  const goToProject = (project) => {
    //const name = project.replace(/ /g, "-").toLowerCase();
    setLoading(true);
    navigate(`/projects/${project}`);
  };

  return (
    <>
      <div className="projects-container">
        <div className="projects-content">
          <motion.div
            className="projects-content-left"
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 + 0.5, ease: "easeInOut" }}
          >
            <Preview img={preview} name={name} borderRadius={true} />
          </motion.div>
          <motion.div
            className="projects-content-right"
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 + 0.5, ease: "easeInOut" }}
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
                    delay: 0.5 + 0.2 * project.id,
                    ease: "easeInOut",
                  }}
                  onMouseOver={() => setPreviewData(project)}
                  onMouseLeave={() => setPreviewData(null)}
                  onClick={() => goToProject(project.id)}
                >
                  {i18n.language === "en" ? project.en.name : project.es.name}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
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
