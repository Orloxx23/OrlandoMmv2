import React from "react";
import { useTranslation } from "react-i18next";

import "./preview.css";
import previewVideo from "../../assets/video/preview.mp4";
import { CursorContext } from "../../context/CursorContext";
import { LoadingContext } from "../../context/LoadingContext";

export default function Preview({ img, name, borderRadius }) {
  const [t, i18n] = useTranslation("global");
  const { setCursorVariant } = React.useContext(CursorContext);
  const { loadElement } = React.useContext(LoadingContext);
  const [loading, setLoading] = React.useState(false);

  let location = window.location.pathname;

  React.useEffect(() => {
    setLoading(true);

    if (location.length >= 11) {
      setLoading(false);
    }

    if (name === "" || name === null) {
      setLoading(false);
    }
  }, [img, name]);

  return (
    <>
      <div
        className="preview-container"
        onMouseEnter={() => setCursorVariant("img")}
        onMouseLeave={() => setCursorVariant("default")}
        style={{ borderRadius: borderRadius ? "1.25rem" : "0px" }}
      >
        <video
          autoPlay
          muted
          loop
          className="preview-video"
          onPlay={() => {
            loadElement();
            setLoading(false);
          }}
          style={{ borderRadius: borderRadius ? "1.25rem" : "0px" }}
        >
          <source src={previewVideo} type="video/mp4" />
        </video>

        {loading ? (
          <div
            className="preview-title"
            style={{ borderRadius: borderRadius ? "1.25rem" : "0px" }}
          >
            <div className="preview-loader"></div>
          </div>
        ) : (
          <div
            className="preview-title"
            style={{ borderRadius: borderRadius ? "1.25rem" : "0px" }}
          >
            <h1>{name ? name : t("projects.title")}</h1>
            <p>{name ? "" : t("projects.text")}</p>
          </div>
        )}

        {img && (
          <img
            src={img}
            alt="preview"
            className="preview-img"
            onLoad={() => {
              setLoading(false);
            }}
            style={{ borderRadius: borderRadius ? "1.25rem" : "0px" }}
          />
        )}
      </div>
    </>
  );
}
