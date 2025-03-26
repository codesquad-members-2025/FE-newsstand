import { useState } from "react";
import AutoRollingNews from "./components/commons/AutoRollingNews";
import GlobalStyle from "./style/GlobalStyle";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GlobalStyle />
      <AutoRollingNews />
    </>
  );
}

export default App;
