import styled from "styled-components";
import { useEffect, useState } from "react";
import NewsContainer from "./NewsContainer";

const RollingBarWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  padding-top: 2.5rem;
`;

export default function AutoNewsBarContainer() {
  const [headLineNews, setheadLineNews] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/HeadLineNews/HeadLineNews.json");
      const data = await res.json();
      setheadLineNews(() => data.newsHeadLine);
    }
    fetchData();
  }, []);

  if (headLineNews.length === 0) return null;
  const leftNews = headLineNews.slice(0, 5);
  const rightNews = headLineNews.slice(5);

  return (
    <RollingBarWrapper>
      <NewsContainer newsData={leftNews} />
      <NewsContainer newsData={rightNews} />
    </RollingBarWrapper>
  );
}
