import styled from '@emotion/styled';

import NewsPaperIcon from '@/assets/icons/newspaper.svg?react';

const StyledBrandSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

const BrandIcon = styled(NewsPaperIcon)`
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.colors.text.point};
`;

const BrandName = styled.h1`
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text.strong};
  ${({ theme }) => theme.typography.b24}
`;

const BrandSection = () => {
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <StyledBrandSection onClick={refreshPage}>
      <BrandIcon role="img" aria-label="뉴스 아이콘" />
      <BrandName>뉴스스탠드</BrandName>
    </StyledBrandSection>
  );
};

export default BrandSection;
