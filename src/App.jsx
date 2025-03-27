import { useState } from "react";
import GlobalStyle from "./style/GlobalStyle";
// import AutoRollingNews from "./components/AutoHeadline/AutoRollingNews";
import NewsStandPage from "./containers/NewsStandPage";
function App() {
  return (
    <>
      <GlobalStyle />

      <NewsStandPage />
    </>
  );
}

export default App;
