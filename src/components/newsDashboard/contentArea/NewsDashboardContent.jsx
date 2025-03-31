import styled from "styled-components";
import ListView from "./ListView.jsx";
import GridView from "./GridView.jsx";

const DashboardContentArea = styled.div`
  margin-top: 24px;
  width: 930px;
  height: 388px;
`;

function NewsDashboardContent({ activeTab, displayMode }) {
  return (
    <DashboardContentArea>
      {activeTab === "Subscribed" ? (
        displayMode === "ListView" ? (
          <ListView title={"내가 구독한 언론사 리스트 뷰"} />
        ) : (
          <GridView activeTab={activeTab} />
        )
      ) : displayMode === "ListView" ? (
        <ListView title={"전체 언론사 리스트 뷰"} />
      ) : (
        <GridView activeTab={activeTab} />
      )}
    </DashboardContentArea>
  );
}

export default NewsDashboardContent;
