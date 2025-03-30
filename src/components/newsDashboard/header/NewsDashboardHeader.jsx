import styled from "styled-components";
import MediaTabs from "./MediaTabs.jsx";
import DisplayMode from "./DisplayMode.jsx";

const Header = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: space-between;
`;

function NewsDashboardHeader({
  activeTab,
  setActiveTab,
  displayMode,
  setDisplayMode,
}) {
  return (
    <Header>
      <MediaTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <DisplayMode displayMode={displayMode} setDisplayMode={setDisplayMode} />
    </Header>
  );
}

export default NewsDashboardHeader;
