import DashboardHeader from "./header/NewsDashboardHeader.jsx";
import AllPressContentArea from "./contentArea/GridView.jsx";
import { useEffect, useState } from "react";
import styled from "styled-components";
import ListContentArea from "./contentArea/ListView.jsx";

const DashboardContentArea = styled.div`
  margin-top: 24px;
  width: 930px;
  height: 388px;
`;

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
      <DashboardContentArea>
        {activeTab === "AllPress" ? (
          <AllPressContentArea />
        ) : (
          <ListContentArea title={"내가 구독한 언론사 리스트 뷰"} />
        )}
      </DashboardContentArea>
    </>
  );
}

export default NewsDashboard;
