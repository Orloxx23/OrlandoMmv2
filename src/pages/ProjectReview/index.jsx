import { motion, useIsPresent } from "framer-motion";
import React from "react";
import { LoadingContext } from "../../context/LoadingContext";
import { projects } from "../../assets/data/projects";
import { useNavigate, useParams } from "react-router-dom";
import { CursorContext } from "../../context/CursorContext";
import { Preview } from "../../components";
import "./projectr.css";
import { useTranslation } from "react-i18next";

export default function ProjectReview() {
  const { id } = useParams();
  const { setLoading, setElements, loadElement } =
    React.useContext(LoadingContext);
  const { setCursorVariant } = React.useContext(CursorContext);
  const [project, setProject] = React.useState(null);
  const [t, i18n] = useTranslation("global");
  const infoRef = React.useRef(null);

  const isPresent = useIsPresent();
  let navigate = useNavigate();
  let location = window.location.pathname;

  React.useEffect(() => {
    setElements(3);
    setLoading(isPresent);
  }, []);

  const executeScroll = () => infoRef.current.scrollIntoView();

  React.useEffect(() => {
    const load = projects.find((project) => project.id.toString() === id);
    if (load !== undefined && load !== null) {
      loadElement();
      setProject(load);
    }
  }, [id]);

  const goTo = (link) => {
    const currentId = parseInt(id);
    if (currentId === 1 && link === "/projects/" + (currentId - 1)) return;
    if (
      currentId === projects.length &&
      link === "/projects/" + (currentId + 1)
    )
      return;
    if (link === location) return;
    setLoading(true);
    navigate(link);
    goToTop();
  };

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="no-scrolleable">
      {project ? (
        <>
          <div className="projectr-header">
            <Preview
              img={project.preview}
              name={i18n.language === "en" ? project.en.name : project.es.name}
              borderRadius={false}
            />
          </div>
        </>
      ) : (
        <></>
      )}
      <div className="projectr-view">
        <div className="projectr-view-container" onClick={executeScroll}>
          <i
            className="fa-solid fa-angles-down"
            onMouseEnter={() => setCursorVariant("txt")}
            onMouseLeave={() => setCursorVariant("default")}
          ></i>
        </div>
      </div>
      <div className="projectr-content no-scrolleable">
        <div className="projectr-content-container" ref={infoRef}>
          <div className="projectr-content-left">
            <div className="projectr-content-left-item">
              <h2>{t("project.category")}</h2>
              <div className="projectr-content-left-subitem">
                {i18n.language === "en"
                  ? project?.en.category.map((c) => <p>{c}</p>)
                  : project?.es.category.map((c) => <p>{c}</p>)}
              </div>
            </div>
            <div className="projectr-content-left-item">
              <h2>{t("project.tags")}</h2>
              <div className="projectr-content-left-subitem">
                {project?.tags.map((t) => (
                  <p>{t}</p>
                ))}
              </div>
            </div>
            <div className="projectr-content-left-item">
              <h2>{t("project.status")}</h2>
              <div className="projectr-content-left-subitem projectr-content-left-subitem-center">
                {i18n.language === "en" ? (
                  <p>{project?.en.status}</p>
                ) : (
                  <p>{project?.es.status}</p>
                )}
                <span>
                  {project?.en.status === "Completed" ? (
                    <i className="fa-solid fa-check"></i>
                  ) : (
                    <i className="fa-solid fa-spinner"></i>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="projectr-content-right">
            <div className="projectr-content-right-item">
              <p>
                {i18n.language === "en"
                  ? project?.en.description
                  : project?.es.description}
              </p>
            </div>
            <div className="projectr-content-right-item">
              {project?.demo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className="fa-solid fa-arrow-up-right-from-square"
                    onMouseEnter={() => {
                      setCursorVariant("txt");
                    }}
                    onMouseLeave={() => {
                      setCursorVariant("default");
                    }}
                  ></i>
                </a>
              ) : (
                <></>
              )}
              {project?.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className="fa-brands fa-github"
                    onMouseEnter={() => {
                      setCursorVariant("txt");
                    }}
                    onMouseLeave={() => {
                      setCursorVariant("default");
                    }}
                  ></i>
                </a>
              ) : (
                <></>
              )}
            </div>
            <div className="projectr-content-right-item">
              <div className="projectr-footer">
                <motion.div
                  className="projectr-footer-container"
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                >
                  <div
                    className="projectr-footer-arrow"
                    onClick={() => goTo("/projects/" + (parseInt(id) - 1))}
                    style={{
                      opacity: parseInt(id) === 1 ? 0.2 : 1,
                      cursor: parseInt(id) === 1 ? "default" : "pointer",
                    }}
                  >
                    <i
                      className="fa-solid fa-chevron-left"
                      onMouseEnter={() => {
                        parseInt(id) !== 1 && setCursorVariant("txt");
                      }}
                      onMouseLeave={() => {
                        parseInt(id) !== 1 && setCursorVariant("default");
                      }}
                    ></i>
                  </div>
                  <div className="projectr-footer-title">
                    <p
                      onClick={() => goTo("/projects")}
                      onMouseEnter={() => setCursorVariant("txt")}
                      onMouseLeave={() => setCursorVariant("default")}
                    >
                      {t("projects.title")}
                    </p>
                  </div>
                  <div
                    className="projectr-footer-arrow"
                    onClick={() => goTo("/projects/" + (parseInt(id) + 1))}
                    style={{
                      opacity: parseInt(id) === projects.length ? 0.2 : 1,
                      cursor:
                        parseInt(id) === projects.length
                          ? "default"
                          : "pointer",
                    }}
                  >
                    <i
                      className="fa-solid fa-chevron-right"
                      onMouseEnter={() => {
                        parseInt(id) !== projects.length &&
                          setCursorVariant("txt");
                      }}
                      onMouseLeave={() => {
                        parseInt(id) !== projects.length &&
                          setCursorVariant("default");
                      }}
                    ></i>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0, transition: { duration: 0.5, ease: "circOut" } }}
        exit={{ scaleY: 1, transition: { duration: 0.5, ease: "circIn" } }}
        style={{ originY: isPresent ? 0 : 1 }}
        className="privacy-screen"
      />
    </div>
  );
}
