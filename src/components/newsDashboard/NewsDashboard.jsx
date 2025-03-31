import DashboardHeader from "./header/NewsDashboardHeader.jsx";
import DashboardContentArea from "./contentArea/NewsDashboardContentArea.jsx";
import { useEffect, useState } from "react";

function NewsDashboard() {
  const [activeTab, setActiveTab] = useState("AllPress");
  const [displayMode, setDisplayMode] = useState("GridView");

  useEffect(() => {
    if (activeTab === "Subscribed") setDisplayMode("ListView");
    else setDisplayMode("GridView");
  }, [activeTab]);

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
