import "./styles/reset.css";
import "./styles/global.css";
import Header from "./components/Header.jsx";
import RollingArea from "./components/RollingArea.jsx";
import NewsDashboardArea from "./components/newsDashboard/NewsDashboard.jsx";

function App() {
  return (
    <>
      <Header />
      <RollingArea />
      <NewsDashboardArea />
    </>
  );
}

export default App;
