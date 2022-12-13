import React from "react";
import { CursorProvider } from "./context/CursorContext";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import { useRoutes, useLocation } from "react-router-dom";
import { About, Contact, Coverpage } from "./pages";
import { AnimatePresence } from "framer-motion";

import global_en from "./languages/en/global.json";
import global_es from "./languages/es/global.json";
import { Menu } from "./components";
import Projects from "./pages/Projects";

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
      element:<Coverpage />,
    },
  ]);

  const location = useLocation();
  if (!element) return null;
  return (
    <>
      <CursorProvider>
        <I18nextProvider i18n={i18next}>
          <Menu />
          <AnimatePresence mode="wait">
            {React.cloneElement(element, { key: location.pathname })}
          </AnimatePresence>
        </I18nextProvider>
      </CursorProvider>
    </>
  );
}

export default App;
