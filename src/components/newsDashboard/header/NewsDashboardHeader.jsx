import styled from "styled-components";
import MediaTabs from "./MediaTabs.jsx";
import DisplayMode from "./DisplayMode.jsx";

const Header = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: space-between;
`;

function NewsDashboardHeader() {
  return (
    <Header>
      <MediaTabs />
      <DisplayMode />
    </Header>
  );
}

export default NewsDashboardHeader;
