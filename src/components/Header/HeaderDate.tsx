import React, { FC } from "react"; // 리액트 및 타입 정의 import
import styled from "@emotion/styled"; // styled-components or emotion 사용 시 (선택)

interface MyComponentProps {
  // 컴포넌트에 필요한 props 타입을 정의
  title?: string;
}

const HeaderDate: FC<MyComponentProps> = ({ title }) => {
  return (
    <Container>
      <p>2024. 03. 28 금요일</p>
      {title}
    </Container>
  );
};

export default HeaderDate;

// 아래는 Emotion styled 예시 (선택)
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  font-size: 1rem;
  font-weight: bold;
  font-weight: 500;
`;
