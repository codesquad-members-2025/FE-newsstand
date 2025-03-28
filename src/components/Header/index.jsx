/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import NewsPaperIcon from '../../assets/icons/newspaper.svg?react';

const HeaderBar = styled.header`
  width: 930px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
`;

const BrandSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;

const BrandIcon = styled(NewsPaperIcon)`
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.colors.text.point};
`;

const BrandName = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text.strong};
  ${({ theme }) => theme.typography.b24}
`;

const DateDisplay = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text.default};
  ${({ theme }) => theme.typography.m16}
`;

const Header = () => {
  return (
    <HeaderBar>
      <BrandSection>
        <BrandIcon role="img" aria-label="뉴스 아이콘" />
        <BrandName>뉴스스탠드</BrandName>
      </BrandSection>
      <DateDisplay>2023. 02. 14. 수요일</DateDisplay>
    </HeaderBar>
  );
};

export default Header;
