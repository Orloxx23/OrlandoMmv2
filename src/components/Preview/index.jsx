import React from "react";
import { useTranslation } from "react-i18next";

import "./preview.css";
import previewVideo from "../../assets/video/preview.mp4";
import { CursorContext } from "../../context/CursorContext";

export default function Preview({ img, name }) {
  const [t, i18n] = useTranslation("global");
  const { setCursorVariant } = React.useContext(CursorContext);
  return (
    <>
      <div
        className="preview-container"
        onMouseEnter={() => setCursorVariant("img")}
        onMouseLeave={() => setCursorVariant("default")}
      >
        <video autoPlay muted loop className="preview-video">
          <source src={previewVideo} type="video/mp4" />
        </video>
        <div className="preview-title">
          <h1>{name ? name : t("projects.title")}</h1>
          <p>{name ? "" : t("projects.text")}</p>
        </div>
        {img && <img src={img} alt="preview" className="preview-img" />}
      </div>
    </>
  );
}
