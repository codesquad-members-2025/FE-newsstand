/** @jsxImportSource @emotion/react */ // Emotion 사용 시 (선택)
import React, { FC } from "react"; // 리액트 및 타입 정의 import
import styled from "@emotion/styled"; // styled-components or emotion 사용 시 (선택)
// import { Link } from "react-router-dom";
import PressGridElem from "./PressGridElem";
import { useNewsContext } from "../../../contexts/NewsContext";
import makeAllPressData from "../../../utils/makeAllPressData";

interface MyComponentProps {
  // 컴포넌트에 필요한 props 타입을 정의
  currPressState?: string;
}

const PressGridPage: FC<MyComponentProps> = ({ currPressState }) => {
  const { state } = useNewsContext();
  const newsData = state.data;

  const allPressData = newsData ? makeAllPressData(newsData) : [];

  // console.log(newsData);
  console.log(currPressState);
  console.log(allPressData);

  // if (currPressState === "all-press") {
  //   // 전체 언론사 보기
  // } else if (currPressState === "my-press") {
  //   // 내가 구독한 언론사 보기 (전역 데이터에서 불러오기)
  // }

  return (
    <Container>
      {/* <Link to="/press-list">Press List</Link> */}
      <PressGridElem title="Press Grid Element 1" />
      <PressGridElem title="Press Grid Element 2" />
      <PressGridElem title="Press Grid Element 3" />
      <PressGridElem title="Press Grid Element 4" />
      <PressGridElem title="Press Grid Element 5" />
      <PressGridElem title="Press Grid Element 6" />
      <PressGridElem title="Press Grid Element 7" />
      <PressGridElem title="Press Grid Element 8" />
      <PressGridElem title="Press Grid Element 9" />
      <PressGridElem title="Press Grid Element 10" />
      <PressGridElem title="Press Grid Element 11" />
      <PressGridElem title="Press Grid Element 12" />
      <PressGridElem title="Press Grid Element 13" />
      <PressGridElem title="Press Grid Element 14" />
      <PressGridElem title="Press Grid Element 15" />
      <PressGridElem title="Press Grid Element 16" />
      <PressGridElem title="Press Grid Element 17" />
      <PressGridElem title="Press Grid Element 18" />
      <PressGridElem title="Press Grid Element 19" />
      <PressGridElem title="Press Grid Element 20" />
      <PressGridElem title="Press Grid Element 21" />
      <PressGridElem title="Press Grid Element 22" />
      <PressGridElem title="Press Grid Element 23" />
      <PressGridElem title="Press Grid Element 24" />
    </Container>
  );
};

export default PressGridPage;

// 아래는 Emotion styled 예시 (선택)
const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 6.063rem);
  grid-template-columns: repeat(6, 9.688rem);
  height: 100%;
`;
