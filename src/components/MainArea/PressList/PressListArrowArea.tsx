import React, { FC } from "react"; // 리액트 및 타입 정의 import
import styled from "@emotion/styled"; // styled-components or emotion 사용 시 (선택)

// interface MyComponentProps {
//   // 컴포넌트에 필요한 props 타입을 정의
//   title?: [];
// }

const PressListArrowArea: FC = () => {
  return (
    <Container>
      <p>왼쪽 화실표</p>
      <p>오른쪽 화실표</p>
    </Container>
  );
};

export default PressListArrowArea;

// 아래는 Emotion styled 예시 (선택)
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: 3 / 1 / 3 / 3;
`;
