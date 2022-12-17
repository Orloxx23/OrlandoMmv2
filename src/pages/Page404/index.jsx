import React from "react";
import Spline from "@splinetool/react-spline";
import { LoadingContext } from "../../context/LoadingContext";
import { useIsPresent } from "framer-motion";

export default function Page404() {
  const { setLoading, setElements, setElementsLoaded } =
    React.useContext(LoadingContext);
  const isPresent = useIsPresent();

  React.useState(() => {
    setElementsLoaded(0);
    setElements(100);
    setElements(1);
    setLoading(isPresent);
  }, []);

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Spline
        scene="https://prod.spline.design/Mt1aHsVQGkfFKdn5/scene.splinecode"
        onLoad={() => setElementsLoaded(1)}
      />
    </div>
  );
}
