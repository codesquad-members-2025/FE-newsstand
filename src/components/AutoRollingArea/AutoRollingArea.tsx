/** @jsxImportSource @emotion/react */ // Emotion 사용 시 (선택)
import React, { FC } from "react"; // 리액트 및 타입 정의 import
import styled from "@emotion/styled"; // styled-components or emotion 사용 시 (선택)
import AutoRolling from "./AutoRolling";
import { useNewsContext } from "../../contexts/NewsContext";
import makeRandNewsData from "../../utils/makeRandNewsData";

// interface MyComponentProps {
//   // 컴포넌트에 필요한 props 타입을 정의
//   newsTitle?: string;
// }

const AutoRollingArea: FC = () => {
  const { state } = useNewsContext();
  const newsData = state.data;
  const { rightNewsData, leftNewsData } = makeRandNewsData(newsData);

  const isValidData = (data: unknown[]) => Array.isArray(data) && data.length > 0;

  return (
    <Container>
      {isValidData(leftNewsData) && (
        <AutoRolling position="left" news={leftNewsData} />
      )}
      {isValidData(rightNewsData) && (
        <AutoRolling position="right" news={rightNewsData} />
      )}
    </Container>
  );
};

export default AutoRollingArea;

// 아래는 Emotion styled 예시 (선택)
const Container = styled.div`
  overflow: "hidden";
  display: grid;
  grid-template-rows: 3.063rem;
  grid-template-columns: 1fr 1fr;
  column-gap: 0.5rem;
`;
