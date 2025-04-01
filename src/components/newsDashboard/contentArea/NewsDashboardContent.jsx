import styled from "styled-components";
import ListView from "./ListView.jsx";
import GridView from "./GridView.jsx";

const DashboardContentArea = styled.div`
  margin-top: 24px;
  width: 930px;
  height: 388px;
`;

function NewsDashboardContent({ activeTab, displayMode }) {
  const isGridView = displayMode === "GridView";

  return (
    <DashboardContentArea>
      {isGridView ? <GridView activeTab={activeTab} /> : <ListView />}
    </DashboardContentArea>
  );
}

export default NewsDashboardContent;
