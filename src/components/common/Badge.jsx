import styled from '@emotion/styled';

const StyledBadge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;

  background-color: ${({ theme, isActive }) => {
    const surfaceColor = theme.colors.surface;
    return isActive ? surfaceColor.brandDefault : surfaceColor.brandAlt;
  }};

  color: ${({ theme, isActive }) => {
    const textColor = theme.colors.text;
    return isActive ? textColor.whiteDefault : textColor.whiteWeak;
  }};

  border-radius: ${({ theme }) => theme.radius.m};

  ${({ theme }) => theme.typography.m12}
`;

export default function Badge({ isActive, label }) {
  return <StyledBadge isActive={isActive}>{label}</StyledBadge>;
}
