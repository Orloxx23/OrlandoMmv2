import React from "react";
import { CursorProvider } from "./context/CursorContext";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import { useRoutes, useLocation } from "react-router-dom";
import {
  About,
  Contact,
  Coverpage,
  Projects,
  ProjectReview,
  Page404,
} from "./pages";
import { AnimatePresence } from "framer-motion";

import global_en from "./languages/en/global.json";
import global_es from "./languages/es/global.json";
import { Menu } from "./components";
import { LoadingProvider } from "./context/LoadingContext";
import "./global.css";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      global: global_en,
    },
    es: {
      global: global_es,
    },
  },
});

function App() {
  const element = useRoutes([
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/projects/:id",
      element: <ProjectReview />,
      errorElement: <Page404 />,
    },
    {
      path: "/projects",
      element: <Projects />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/",
      element: <Coverpage />,
    },
    {
      path: "*",
      element: <Page404 />,
    },
  ]);

  const location = useLocation();
  if (!element) return null;
  return (
    <>
      <CursorProvider>
        <LoadingProvider>
          <I18nextProvider i18n={i18next}>
            <Menu />
            <AnimatePresence mode="wait">
              {React.cloneElement(element, { key: location.pathname })}
            </AnimatePresence>
          </I18nextProvider>
        </LoadingProvider>
      </CursorProvider>
    </>
  );
}

export default App;
