import React, { FC, useMemo } from "react";
import { pressType } from "../../../types/pressDataTypes";
import styled from "@emotion/styled";
import PressListNav from "./PressListNav";
import PressListMainNews from "./PressListMainNews";
import PressListSubNews from "./PressListSubNews";
import PressListArrowArea from "./PressListArrowArea";

import makeAllListData from "../../../utils/makeAllListData";
import { useNewsContext } from "../../../contexts/NewsContext";

interface MyComponentProps {
  currCategory: string; // "전체" | "스포츠/연예" | "종합/경제" | ...
}

// PressListContent 컴포넌트
const PressListContent: FC<MyComponentProps> = ({ currCategory }) => {
  const { state } = useNewsContext();
  const [pressIndex, setPressIndex] = React.useState(0); // 현재 선택된 프레스 인덱스

  // state.data가 null일 수도 있으므로 명시적 타입 단언 (카테고리명이 key이며 pressType 배열을 값으로 가짐)
  const newsData = state.data as { [category: string]: pressType[] } | null;

  // useMemo를 사용해 newsData와 currCategory가 변경될 때만 필터링을 수행합니다.
  const filteredData: Array<pressType & { category: string }> = useMemo(() => {
    if (!newsData) return [];
    // newsData의 모든 데이터를 하나의 배열로 변환 (각 아이템에 category 필드 추가)
    const allDataList = makeAllListData(newsData);
    // 해당 카테고리 선택 시 필터링
    return allDataList.filter((item) => item.category === currCategory);
  }, [newsData, currCategory]);

  return (
    <Container>
      <PressListNav pressIndex={pressIndex} data={filteredData} />
      <PressListMainNews pressIndex={pressIndex} data={filteredData} />
      <PressListSubNews pressIndex={pressIndex} data={filteredData} />
      <PressListArrowArea setPressIndex={setPressIndex} />
    </Container>
  );
};

export default PressListContent;

const Container = styled.div`
  display: grid;
  grid-template-columns: 320px 530px;
  grid-template-rows: 24px 260px 32px;
  gap: 1.5rem;
  padding: 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.border.default};
`;
