// components/TabItem.jsx
/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

import Badge from '@components/common/Badge';

const StyledTabItem = styled.button`
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

const LabelWrapper = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const TabItem = ({ isActive, onClick, label, badgeLabel }) => {
  return (
    <>
      <StyledTabItem isActive={isActive} onClick={onClick}>
        <LabelWrapper>
          {label}
          {badgeLabel && <Badge label={badgeLabel} isActive={isActive} />}
        </LabelWrapper>
      </StyledTabItem>
    </>
  );
};

export default TabItem;
