/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

import Button from '@/components/common/Button';

const StyledPressInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
`;

const Logo = styled.img`
  height: 20px;
`;

const Time = styled.div`
  ${({ theme }) => theme.typography.m12}
  color: ${({ theme }) => theme.colors.text.default};
`;

export default function PressInfo({ logoUrl, editedTime }) {
  return (
    <StyledPressInfo>
      <Logo src={logoUrl} />
      <Time>{editedTime} 편집</Time>
      <Button isEmphasized labelText="구독하기" iconType="plus" />
    </StyledPressInfo>
  );
}
