import styled from '@emotion/styled';

import TabList from './TabList';
import ViewModeToggle from './ViewModeToggle';

const TabBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
`;

const MediaTab = ({ tabType, setTabType, viewType, setViewType }) => {
  return (
    <TabBarContainer>
      <TabList tabType={tabType} setTabType={setTabType} />
      <ViewModeToggle viewType={viewType} setViewType={setViewType} />
    </TabBarContainer>
  );
};

export default MediaTab;
