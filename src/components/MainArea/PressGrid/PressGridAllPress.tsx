/** @jsxImportSource @emotion/react */ // Emotion 사용 시 (선택)
import React, { FC, useState } from "react"; // 리액트 및 타입 정의 import
import styled from "@emotion/styled"; // styled-components or emotion 사용 시 (선택)
import PressGridElem from "./PressGridElem";
import { useNewsContext } from "../../../contexts/NewsContext";
import makeAllPressData from "../../../utils/makeAllPressData";
import { pressTypes } from "../../../types/pressDataTypes";

const PressGridAllPress: FC = () => {
  const [page, setPage] = useState(0);
  const { state } = useNewsContext();

  // '전체 언론사 보기' 로직 처리
  const newsData = state.data;
  const gridData: pressTypes = newsData ? makeAllPressData(newsData) : [];
  // '내가 구독한 언론사' 로직 처리는 자식 컴포넌트에서

  const maxPage = 3;
  const currentData = gridData.slice(page * 24, (page + 1) * 24);

  return (
    <Container>
      <div className="press-grid-area">
        {/* <Link to="/press-list">Press List</Link> */}
        {currentData.map(
          ({ pid, name, regDate, materials, logoDark, logoLight }) => (
            <PressGridElem
              key={pid}
              name={name}
              regDate={regDate}
              materials={materials}
              dataId={parseInt(pid)}
              logoDark={logoDark}
              logoLight={logoLight}
            />
          )
        )}
      </div>
      <div className="press-grid-arrow-area">
        {/* 화살표 버튼 영역 */}
        <img
          src="/src/assets/press-icons/LeftButton.svg"
          alt="left-arrow"
          onClick={() => setPage((prev) => (prev === 0 ? maxPage : prev - 1))}
        />
        <img
          src="/src/assets/press-icons/RightButton.svg"
          alt="right-arrow"
          onClick={() => setPage((prev) => (prev === maxPage ? 0 : prev + 1))}
        />
      </div>
    </Container>
  );
};

export default PressGridAllPress;

// 아래는 Emotion styled 예시 (선택)
const Container = styled.div`
  .press-grid-area {
    display: grid;
    grid-template-rows: repeat(4, 6.063rem);
    grid-template-columns: repeat(6, 9.688rem);
    height: 100%;
  }

  .press-grid-arrow-area {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 3.125rem;
    margin-top: 1.875rem;

    img {
      width: 2.5rem;
      height: 2.5rem;
      cursor: pointer;
    }
  }
`;
