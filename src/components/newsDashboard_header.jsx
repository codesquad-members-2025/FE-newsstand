import "../styles/newsDashboard_header.css";

function NewsDashboardHeader() {
  return (
    <div className="newsDashboard-header">
      <div className="tabButtons">
        <button className="allPress selectedTab">전체 언론사</button>
        <div className="subscribedButton">
          <button>내가 구독한 언론사</button>
          <div className="badge">0</div>
        </div>
      </div>
      <div className="viewerButtons">
        <button className="listView">
          <div className="listButton"></div>
        </button>
        <button className="gridView">
          <div className="gridButton selectedViewer"></div>
        </button>
      </div>
    </div>
  );
}

export default NewsDashboardHeader;
