import styled from '@emotion/styled';
import { useContext } from 'react';

import { SubscribeContext } from '@/context/SubscribeContext';

import TabItem from './TabItem';

const StyledTabList = styled.div`
  display: flex;
  gap: 16px;
`;

const TabList = ({ activeTab, setActiveTab }) => {
  const { subscribedPress } = useContext(SubscribeContext);

  return (
    <StyledTabList>
      <TabItem
        isActive={activeTab === 'all'}
        onClick={() => setActiveTab('all')}
        tabType="all"
      />
      <TabItem
        isActive={activeTab === 'subscribed'}
        onClick={() => setActiveTab('subscribed')}
        tabType="subscribed"
        badgeLabel={subscribedPress.length}
      />
    </StyledTabList>
  );
};

export default TabList;
