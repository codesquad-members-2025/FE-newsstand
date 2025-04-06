import React, { FC } from "react"; // 리액트 및 타입 정의 import
import styled from "@emotion/styled"; // styled-components or emotion 사용 시 (선택)
import logo from "../../assets/press-icons/newsstand-logo.svg";

// interface MyComponentProps {
//   // 컴포넌트에 필요한 props 타입을 정의
//   title?: string;
// }

const HeaderTitle: FC = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <Container onClick={handleRefresh}>
      <img src={logo} alt="logo" />
      <p>뉴스스탠드</p>
    </Container>
  );
};

export default HeaderTitle;

// 아래는 Emotion styled 예시 (선택)
const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 1rem 0rem;
  width: 8.5rem;

  img {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.5rem;
  }

  p {
    font-size: 1.5rem;
  }
`;
