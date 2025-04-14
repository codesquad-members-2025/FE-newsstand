import React, { FC } from "react"; // 리액트 및 타입 정의 import
import styled from "@emotion/styled"; // styled-components or emotion 사용 시 (선택)
import HeaderTitle from "./HeaderTitle";
import HeaderToggle from "./HeaderToggle";
import HeaderDate from "./HeaderDate";

// interface MyComponentProps {
//   // 컴포넌트에 필요한 props 타입을 정의
//   toggleTheme: () => void;
// }

const Header: FC = () => {
  return (
    <Container>
      <HeaderTitle />
      <HeaderToggle />
      <HeaderDate />
    </Container>
  );
};

export default Header;

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.typo.bold24.fontSize};
  font-weight: ${({ theme }) => theme.typo.bold24.fontWeight};
  line-height: ${({ theme }) => theme.typo.bold24.lineHeight};
`;
