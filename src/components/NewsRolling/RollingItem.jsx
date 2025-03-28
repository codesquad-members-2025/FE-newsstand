import React from 'react';
import styled from '@emotion/styled';

const RollingItemContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  color: ${({ theme }) => theme.colors.text.strong};
  background-color: ${({ theme }) => theme.colors.surface.alt};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  ${({ theme }) => theme.typography.b14}
`;

const NewsSource = styled.span`
  font-weight: bold;
`;

const NewsTitle = styled.span`
  flex-grow: 1;
  color: ${({ theme }) => theme.colors.text.default};
  ${({ theme }) => theme.typography.m14}
`;

const RollingItem = () => {
  return (
    <RollingItemContainer>
      <NewsSource>연합뉴스</NewsSource>
      <NewsTitle>
        [1보] 김기현·안철수·천하람 황교안, 與전대 본경선 진출
      </NewsTitle>
    </RollingItemContainer>
  );
};

export default RollingItem;
