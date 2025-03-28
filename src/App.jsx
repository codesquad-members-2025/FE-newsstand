import "./styles/reset.css";
import "./styles/global.css";
import Header from "./components/header.jsx";
import RollingArea from "./components/rollingArea.jsx";
import NewsDashboardArea from "./components/newsDashboard.jsx";

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
