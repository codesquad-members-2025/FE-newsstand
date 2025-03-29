import styled from "styled-components";

const TabButtons = styled.div`
  display: flex;
  gap: 24px;
  font: var(--available-medium16);
  color: var(--text-weak);
`;

const AllpressButton = styled.button`
  &.selectedTab {
    font: var(--selected-bold16);
    color: var(--text-strong);
  }
`;

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

function MediaTabs() {
  return (
    <TabButtons>
      <AllpressButton className="selectedTab">전체 언론사</AllpressButton>
      <SubscribedArea>
        <SubscribedPressButton>내가 구독한 언론사</SubscribedPressButton>
        <Badge>0</Badge>
      </SubscribedArea>
    </TabButtons>
  );
}

export default MediaTabs;
