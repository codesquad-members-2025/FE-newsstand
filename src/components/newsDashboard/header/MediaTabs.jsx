import styled from "styled-components";

const TabButtons = styled.div`
  display: flex;
  gap: 24px;
`;

const AllpressButton = styled.button``;

const SubscribedArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

const SubscribedPressButton = styled.button``;

const Badge = styled.div`
  min-width: 20px;
  height: 20px;
  background-color: var(--surface-brand-alt);
  border-radius: 8px;
  font: var(--display-medium12);
  color: var(--text-white-weak);
  display: flex;
  justify-content: center;
  align-items: center;
`;

function getStyledButton(buttonName, activeButton) {
  return {
    font:
      activeButton === buttonName
        ? "var(--selected-bold16)"
        : "var(--available-medium16)",
    color:
      activeButton === buttonName ? "var(--text-strong)" : "var(--text-weak)",
  };
}

function MediaTabs({ activeTab, setActiveTab, setDisplayMode }) {
  function handleClick(buttonName) {
    setActiveTab(buttonName);

    if (buttonName === "Subscribed") setDisplayMode("ListView");
    else setDisplayMode("GridView");
  }

  return (
    <TabButtons>
      <AllpressButton
        style={getStyledButton("AllPress", activeTab)}
        onClick={() => handleClick("AllPress")}
      >
        전체 언론사
      </AllpressButton>
      <SubscribedArea>
        <SubscribedPressButton
          style={getStyledButton("Subscribed", activeTab)}
          onClick={() => handleClick("Subscribed")}
        >
          내가 구독한 언론사
        </SubscribedPressButton>
        <Badge>0</Badge>
      </SubscribedArea>
    </TabButtons>
  );
}

export default MediaTabs;
