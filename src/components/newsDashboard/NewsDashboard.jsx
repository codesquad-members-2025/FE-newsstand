import DashboardHeader from "./header/NewsDashboardHeader.jsx";
import DashboardContentArea from "./contentArea/NewsDashboardContentArea.jsx";
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
      <DashboardContentArea />
    </>
  );
}

export default NewsDashboard;
