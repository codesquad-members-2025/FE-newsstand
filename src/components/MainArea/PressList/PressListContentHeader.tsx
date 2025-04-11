/** PressListContentHeader.tsx */
import React, { FC, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useNewsContext } from "../../../contexts/NewsContext";

interface MyComponentProps {
  currCategory: string;
  setCurrCategory: React.Dispatch<React.SetStateAction<string>>;
}

const PressListContentHeader: FC<MyComponentProps> = ({
  currCategory,
  setCurrCategory,
}) => {
  // 카테고리명을 저장할 상태 (예: "전체", "스포츠/연예", "종합/경제" 등)
  const [categories, setCategories] = useState<string[]>([]);

  // 전역 뉴스 데이터 가져오기
  const { state } = useNewsContext();
  const newsData = state.data;

  // newsData가 바뀌면, newsData의 키에서 카테고리를 추출하여 상태로 설정 (기본으로 "전체" 포함)
  useEffect(() => {
    if (!newsData) return;
    const keys = Object.keys(newsData); // newsData의 각 키가 카테고리
    const categoryList = [...keys];
    setCategories(categoryList);
  }, [newsData]);

  // 카테고리 변경 핸들러
  const handleCategoryChange = (category: string) => {
    setCurrCategory(category);
  };

  return (
    <Container>
      <Categories>
        {categories.map((cat) => (
          <CategoryButton
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            active={cat === currCategory}
          >
            {cat}
          </CategoryButton>
        ))}
      </Categories>
    </Container>
  );
};

export default PressListContentHeader;

// Emotion styled 예시
const Container = styled.div`
  width: 100%;
  height: 100%; /* 부모 그리드의 첫 번째 행인 2.5rem에 딱 맞게 채워짐 */
  display: flex;
  align-items: center; /* 세로 중앙 정렬 */
  justify-content: flex-start;
  margin: 0;
  padding: 0; /* 불필요한 내부 여백 제거 */
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  background-color: ${({ theme }) => theme.colors.surface.alt};
`;

const Categories = styled.div`
  display: flex;
`;

const CategoryButton = styled.div<{ active: boolean }>`
  display: flex;
  justify-content: ${({ active }) => (active ? "flex-start" : "center")};
  align-items: center;
  width: ${({ active }) => (active ? "166px" : "auto")};
  height: 2.5rem;
  padding: 0px 1rem;
  font-weight: ${({ active, theme }) =>
    active ? theme.typo.bold14.fontWeight : theme.typo.medium14.fontWeight};
  font-size: ${({ active, theme }) =>
    active ? theme.typo.bold14.fontSize : theme.typo.medium14.fontSize};
  background-color: ${({ active, theme }) =>
    active ? theme.colors.surface.brandAlt : "transparent"};
  color: ${({ active, theme }) => (active ? "#fff" : theme.colors.text.weak)};
  transition:
    background-color 0.2s ease,
    color 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.surface.brandDefault};
    color: #fff;
  }
`;
