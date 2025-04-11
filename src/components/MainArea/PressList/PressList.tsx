/** @jsxImportSource @emotion/react */ // Emotion 사용 시 (선택)
import React, { FC } from "react"; // 리액트 및 타입 정의 import
import styled from "@emotion/styled"; // styled-components or emotion 사용 시 (선택)
import PressListContentHeader from "./PressListContentHeader";
import PressListContent from "./PressListContent";
// import { useNewsContext } from "../../../contexts/NewsContext";
// import { pressTypes } from "../../../types/pressDataTypes";
// import makeAllListData from "../../../utils/makeAllListData";

interface MyComponentProps {
  // 컴포넌트에 필요한 props 타입을 정의
  currPressState?: string;
}

const PressListPage: FC<MyComponentProps> = ({ currPressState }) => {
  // const { state } = useNewsContext();

  // '전체 언론사 보기' 로직 처리
  // const newsData = state.data;
  // const listData: pressTypes = newsData ? makeAllListData(newsData) : [];
  const [currCategory, setCurrCategory] = React.useState("종합/경제");

  console.log(currPressState);

  return (
    <Container>
      <PressListContentHeader
        currCategory={currCategory}
        setCurrCategory={setCurrCategory}
      />
      <PressListContent currCategory={currCategory} />
      {/* <Link to="/press-grid">Press Grid</Link> */}
    </Container>
  );
};

export default PressListPage;

// 아래는 Emotion styled 예시 (선택)
const Container = styled.div`
  display: grid;
  grid-template-rows: 2.5rem 1fr;
  height: 100%;
`;
