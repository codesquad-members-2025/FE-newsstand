import styled from '@emotion/styled';
import ListIcon from '../../assets/icons/list-view.svg?react';
import GridIcon from '../../assets/icons/grid-view.svg?react';

const TabBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
`;

const TabList = styled.div`
  display: flex;
  gap: 16px;
`;

const TabItem = styled.button`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  background: none;
  padding: 0;
  border: none;
  cursor: pointer;

  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.text.strong : theme.colors.text.weak};

  ${({ theme, isActive }) =>
    isActive ? theme.typography.b16 : theme.typography.m16};
`;

const Badge = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  background-color: ${({ theme }) => theme.colors.surface.brandAlt};
  color: ${({ theme }) => theme.colors.text.whiteWeak};
  font-size: 12px;
  font-weight: 700;
  border-radius: ${({ theme }) => theme.radius.m};
  margin-left: 6px;
`;

const ViewModeToggle = styled.div`
  display: flex;
  gap: 8px;
`;

const ViewButton = styled.button`
  width: 24px;
  height: 24px;
  background: none;
  padding: 0;
  border: none;
  cursor: pointer;

  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.text.point : theme.colors.text.weak};
`;

const MedaiTab = ({
  isSubscribedTab,
  setIsSubscribedTab,
  isListView,
  setIsListView,
}) => {
  return (
    <TabBarContainer>
      <TabList>
        <TabItem
          isActive={!isSubscribedTab}
          onClick={() => setIsSubscribedTab(false)}
        >
          전체 언론사
        </TabItem>
        <TabItem
          isActive={isSubscribedTab}
          onClick={() => setIsSubscribedTab(true)}
        >
          내가 구독한 언론사
          <Badge>8</Badge>
        </TabItem>
      </TabList>

      <ViewModeToggle>
        <ViewButton isActive={isListView} onClick={() => setIsListView(true)}>
          <ListIcon />
        </ViewButton>
        <ViewButton isActive={!isListView} onClick={() => setIsListView(false)}>
          <GridIcon />
        </ViewButton>
      </ViewModeToggle>
    </TabBarContainer>
  );
};

export default MedaiTab;
