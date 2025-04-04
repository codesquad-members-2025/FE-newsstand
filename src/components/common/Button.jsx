import styled from '@emotion/styled';

import ClosedIcon from '@/assets/icons/closed.svg?react';
import PlusIcon from '@/assets/icons/plus.svg?react';

const StyledButton = styled.button`
  width: max-content;
  display: flex;
  gap: 2px;
  padding: 6px;
  border-radius: ${({ theme }) => theme.radius.full};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  color: ${({ theme }) => theme.colors.text.weak};

  background-color: ${({ theme, isEmphasized }) =>
    theme.colors.surface[isEmphasized ? 'alt' : 'default']};

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.border.bold};
    color: ${({ theme }) => theme.colors.text.bold};
  }
`;

const IconWrapper = styled.span`
  display: inline-flex;
  width: 12px;
  height: 12px;

  & > svg {
    width: 100%;
    height: 100%;
  }
`;

const StyledLabel = styled.span`
  padding-right: 4px;
  ${({ theme }) => theme.typography.m12};
`;

function getIconComponent(type) {
  const map = {
    plus: PlusIcon,
    closed: ClosedIcon,
  };

  return map[type] || null;
}

export default function Button({ isEmphasized, label, iconType, onClick }) {
  const IconComponent = getIconComponent(iconType);

  return (
    <StyledButton isEmphasized={isEmphasized} label={label} onClick={onClick}>
      <IconWrapper>
        <IconComponent />
      </IconWrapper>
      {label && <StyledLabel>{label}</StyledLabel>}
    </StyledButton>
  );
}
