import React from "react";
import { LoadScreen } from "../../components";
const LoadingContext = React.createContext();

function LoadingProvider(props) {
  const [elements, setElements] = React.useState(100);
  const [elementsLoaded, setElementsLoaded] = React.useState(0);
  const [loading, setLoading] = React.useState(true);

  const loadElement = () => {
    setElementsLoaded((prev) => prev + 1);
  }

  React.useEffect(() => {
    if (elementsLoaded < elements && elements > 0) {
      setLoading(true);
    }
  }, []);

  return (
    <LoadingContext.Provider
      value={{
        elements,
        setElements,
        loading,
        setLoading,
        elementsLoaded,
        setElementsLoaded,
        loadElement,
      }}
    >
      <LoadScreen loading={loading} />
      {props.children}
    </LoadingContext.Provider>
  );
}

export { LoadingContext, LoadingProvider };
