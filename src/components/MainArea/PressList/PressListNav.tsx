import React, { FC } from "react"; // 리액트 및 타입 정의 import
import styled from "@emotion/styled"; // styled-components or emotion 사용 시 (선택)

// interface MyComponentProps {
//   // 컴포넌트에 필요한 props 타입을 정의
//   title?: string;
// }

const PressListNav: FC = () => {
  return (
    <Container>
      <div>언론사 로고</div>
      <div>편집 시간</div>
      <div>구독하기 버튼</div>
    </Container>
  );
};

export default PressListNav;

// 아래는 Emotion styled 예시 (선택)
const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  grid-column: 1 / 3;
  padding: 1rem;
`;
