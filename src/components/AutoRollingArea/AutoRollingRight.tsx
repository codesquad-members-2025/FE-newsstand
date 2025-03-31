/** @jsxImportSource @emotion/react */ // Emotion 사용 시 (선택)
import React, { FC } from "react"; // 리액트 및 타입 정의 import
import styled from "@emotion/styled"; // styled-components or emotion 사용 시 (선택)

interface NewsItem {
  id: number;
  newsTitle: string;
  thumbnailImage: string;
  link: string;
  date: Date;
}

interface MyComponentProps {
  // 컴포넌트에 필요한 props 타입을 정의
  news?: NewsItem[];
}

const AutoRollingRight: FC<MyComponentProps> = ({ news }) => {
  news?.map((newsItem) => {
    console.log(newsItem.id);
    console.log(newsItem.newsTitle);
    console.log(newsItem.link);
    console.log(newsItem.date);
  });

  const newsItem = news[0];

  return (
    <Container>
      <p className="rolling_left">연합뉴스</p>
      <p className="rolling_title">{newsItem.newsTitle}</p>
    </Container>
  );
};
export default AutoRollingRight;

// Emotion styled
const Container = styled.div`
  display: flex;
  border: 1px solid #ccc;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.surface.alt};
  border: ${({ theme }) => `1px solid ${theme.border.default}`};

  .rolling_left {
    font-weight: ${({ theme }) => theme.typo.bold14.fontWeight};
    font-size: ${({ theme }) => theme.typo.bold14.fontSize};
    line-height: ${({ theme }) => theme.typo.bold14.lineHeight};
  }

  .rolling_title {
    margin-left: 1rem;
    font-weight: ${({ theme }) => theme.typo.medium14.fontWeight};
    font-size: ${({ theme }) => theme.typo.medium14.fontSize};
    line-height: ${({ theme }) => theme.typo.medium14.lineHeight};
    color: ${({ theme }) => theme.colors.text.default};
  }
`;
