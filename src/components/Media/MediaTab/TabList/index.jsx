import styled from '@emotion/styled';

import TabItem from './TabItem';

const StyledTabList = styled.div`
  display: flex;
  gap: 16px;
`;

const TabList = ({ tabType, setTabType }) => {
  return (
    <StyledTabList>
      <TabItem
        isActive={tabType === 'all'}
        onClick={() => setTabType('all')}
        label="전체 언론사"
      />
      <TabItem
        isActive={tabType === 'subscribed'}
        onClick={() => setTabType('subscribed')}
        label="내가 구독한 언론사"
        badgeLabel="8"
      />
    </StyledTabList>
  );
};

export default TabList;
