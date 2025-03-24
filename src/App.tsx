import { useState } from "react";
import { RootContainer, Logo, ReactLogo, Card, ReadTheDocs } from "./styles/AppStyles";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RootContainer>
        <div>
          <a href="https://vite.dev" target="_blank" rel="noreferrer">
            <Logo src={viteLogo} alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <ReactLogo src={reactLogo} alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <Card>
          <button onClick={() => setCount((prev) => prev + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </Card>
        <ReadTheDocs>
          Click on the Vite and React logos to learn more
        </ReadTheDocs>
      </RootContainer>
    </>
  );
}

export default App;
