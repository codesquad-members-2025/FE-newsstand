import React, { FC } from "react"; // 리액트 및 타입 정의 import
import styled from "@emotion/styled"; // styled-components or emotion 사용 시 (선택)

const MainHeaderListTab: FC = () => {
  return (
    <Container>
      <p>이곳에 원하는 내용을 작성하세요.</p>
    </Container>
  );
};

export default MainHeaderListTab;

// 아래는 Emotion styled 예시 (선택)
const Container = styled.div`
  width: 15rem;
  /* height: 1rem; */
  border: 1px solid #ccc;
`;
