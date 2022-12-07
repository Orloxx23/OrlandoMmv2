import { CursorProvider } from "./context/CursorContext";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import { Coverpage } from "./pages";

import global_en from "./languages/en/global.json";
import global_es from "./languages/es/global.json";
import { Menu } from "./components";

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
  return (
    <div className="App">
      <CursorProvider>
        <I18nextProvider i18n={i18next}>
          <Menu />
          <Coverpage />
        </I18nextProvider>
      </CursorProvider>
    </div>
  );
}

export default App;
