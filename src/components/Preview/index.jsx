import React from "react";
import { useTranslation } from "react-i18next";

import "./preview.css";
import previewVideo from "../../assets/video/preview.mp4";
import { CursorContext } from "../../context/CursorContext";
import { LoadingContext } from "../../context/LoadingContext";

export default function Preview({ img, name }) {
  const [t, i18n] = useTranslation("global");
  const { setCursorVariant } = React.useContext(CursorContext);
  const { elementsLoaded, setElementsLoaded } =
    React.useContext(LoadingContext);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);

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
      >
        <video
          autoPlay
          muted
          loop
          className="preview-video"
          onPlay={() => {
            setElementsLoaded(elementsLoaded + 1);
            setLoading(false);
          }}
        >
          <source src={previewVideo} type="video/mp4" />
        </video>

        {loading ? (
          <div className="preview-title">
            <div class="preview-loader"></div>
          </div>
        ) : (
          <div className="preview-title">
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
          />
        )}
      </div>
    </>
  );
}
