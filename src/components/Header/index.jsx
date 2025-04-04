/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

import BrandSection from './BrandSection';
import DateDisplay from './DateDisplay';

const HeaderBar = styled.header`
  width: 930px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
`;

const Header = () => {
  return (
    <HeaderBar>
      <BrandSection />
      <DateDisplay>2023. 02. 14. 수요일</DateDisplay>
    </HeaderBar>
  );
};

export default Header;
