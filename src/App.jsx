import { useState } from "react";
import GlobalStyle from "./style/GlobalStyle";
// import AutoRollingNews from "./components/AutoHeadline/AutoRollingNews";
import TopHeader from "./components/TopHeader/TopHeader";
function App() {
  return (
    <>
      <GlobalStyle />
      {/* <AutoRollingNews /> */}
      <TopHeader />
    </>
  );
}

export default App;
