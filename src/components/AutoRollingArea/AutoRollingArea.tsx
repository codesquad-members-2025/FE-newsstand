/** @jsxImportSource @emotion/react */ // Emotion 사용 시 (선택)
import React, { FC } from "react"; // 리액트 및 타입 정의 import
import styled from "@emotion/styled"; // styled-components or emotion 사용 시 (선택)
import AutoRollingRight from "./AutoRollingRight";
import AutoRollingLeft from "./AutoRollingLeft";

// interface MyComponentProps {
//   // 컴포넌트에 필요한 props 타입을 정의
//   newsTitle?: string;
// }

const AutoRollingArea: FC = () => {
  const leftNews = [
    {
      id: 1,
      newsTitle: "왼쪽 롤링 뉴스 1",
      thumbnailImage: "https://imgnews.naver.com/chosun_news1.png",
      link: "https://news.naver.com/chosun/news1",
      date: new Date(),
    },
    {
      id: 2,
      newsTitle: "왼쪽 롤링 뉴스 2",
      thumbnailImage: "https://imgnews.naver.com/chosun_news1.png",
      link: "https://news.naver.com/chosun/news1",
      date: new Date(),
    },
    {
      id: 3,
      newsTitle: "왼쪽 롤링 뉴스 3",
      thumbnailImage: "https://imgnews.naver.com/chosun_news1.png",
      link: "https://news.naver.com/chosun/news1",
      date: new Date(),
    },
  ];
  const rightNews = [
    {
      id: 1,
      newsTitle: "오른쪽 롤링 뉴스 1",
      thumbnailImage: "https://imgnews.naver.com/chosun_news1.png",
      link: "https://news.naver.com/chosun/news1",
      date: new Date(),
    },
    {
      id: 2,
      newsTitle: "오른쪽 롤링 뉴스 2",
      thumbnailImage: "https://imgnews.naver.com/chosun_news1.png",
      link: "https://news.naver.com/chosun/news1",
      date: new Date(),
    },
    {
      id: 3,
      newsTitle: "오른쪽 롤링 뉴스 3",
      thumbnailImage: "https://imgnews.naver.com/chosun_news1.png",
      link: "https://news.naver.com/chosun/news1",
      date: new Date(),
    },
  ];

  return (
    <Container>
      <AutoRollingLeft news={leftNews} />
      <AutoRollingRight news={rightNews} />
    </Container>
  );
};

export default AutoRollingArea;

// 아래는 Emotion styled 예시 (선택)
const Container = styled.div`
  display: grid;
  grid-template-rows: 3.063rem;
  grid-template-columns: 1fr 1fr;
  column-gap: 0.5rem;
  padding: 1rem;
`;
