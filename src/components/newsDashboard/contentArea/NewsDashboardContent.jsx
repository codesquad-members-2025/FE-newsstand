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
  const title =
    activeTab === "Subscribed"
      ? "내가 구독한 언론사 리스트 뷰"
      : "전체 언론사 리스트 뷰";
  return (
    <DashboardContentArea>
      {isGridView ? <GridView activeTab={activeTab} /> : <ListView />}
    </DashboardContentArea>
  );
}

export default NewsDashboardContent;
