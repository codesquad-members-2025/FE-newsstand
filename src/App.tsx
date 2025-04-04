import styled from "@emotion/styled";
import Header from "./components/Header/Header";
import AutoRollingArea from "./components/AutoRollingArea/AutoRollingArea";
import MainRoutes from "./components/MainArea/MainRoutes";

function App() {
  return (
    <GridLayout>
      <Header />
      <AutoRollingArea />
      <MainRoutes />
    </GridLayout>
  );
}

const GridLayout = styled.div`
  display: grid;
  grid-template-rows: 3.063rem 3.063rem auto;
  grid-template-columns: 58.125rem;
  row-gap: 1.5rem;
  min-height: 100vh;
`;

export default App;
