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

const MediaTab = ({ activeTab, setActiveTab, viewType, setViewType }) => {
  return (
    <TabBarContainer>
      <TabList activeTab={activeTab} setActiveTab={setActiveTab} />
      <ViewModeToggle viewType={viewType} setViewType={setViewType} />
    </TabBarContainer>
  );
};

export default MediaTab;
