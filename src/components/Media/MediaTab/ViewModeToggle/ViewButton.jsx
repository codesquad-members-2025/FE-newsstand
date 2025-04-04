// components/TabItem.jsx
/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

import GridIcon from '@/assets/icons/grid-view.svg?react';
import ListIcon from '@/assets/icons/list-view.svg?react';

const StyledViewButton = styled.button`
  width: 24px;
  height: 24px;
  background: none;
  padding: 0;
  border: none;
  cursor: pointer;

  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.text.point : theme.colors.text.weak};
`;

const iconMap = {
  list: <ListIcon />,
  grid: <GridIcon />,
};

const ViewButton = ({ type, isActive, onClick }) => {
  return (
    <StyledViewButton isActive={isActive} onClick={onClick}>
      {iconMap[type]}
    </StyledViewButton>
  );
};

export default ViewButton;
