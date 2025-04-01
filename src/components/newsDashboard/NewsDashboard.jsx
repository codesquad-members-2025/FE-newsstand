import DashboardHeader from "./header/DashboardHeader.jsx";
import DashboardContent from "./contentArea/DashboardContent.jsx";
import { useState } from "react";

function NewsDashboard() {
  const [activeTab, setActiveTab] = useState("AllPress");
  const [displayMode, setDisplayMode] = useState("GridView");

  return (
    <>
      <DashboardHeader
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        displayMode={displayMode}
        setDisplayMode={setDisplayMode}
      />
      <DashboardContent activeTab={activeTab} displayMode={displayMode} />
    </>
  );
}

export default NewsDashboard;
