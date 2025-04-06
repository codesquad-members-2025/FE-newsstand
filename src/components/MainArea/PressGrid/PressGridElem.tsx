import React, { FC } from "react"; // 리액트 및 타입 정의 import
import styled from "@emotion/styled"; // styled-components or emotion 사용 시 (선택)

interface MyComponentProps {
  // 컴포넌트에 필요한 props 타입을 정의
  title?: string;
}

const PressGridElem: FC<MyComponentProps> = ({ title }) => {
  return (
    <Container>
      <p>{title ?? "Default Title"}</p>
      <p>이곳에 원하는 내용을 작성하세요.</p>
    </Container>
  );
};

export default PressGridElem;

// 아래는 Emotion styled 예시 (선택)
const Container = styled.div`
  border: 0.5px solid #ccc;
  padding: 1rem;
`;
