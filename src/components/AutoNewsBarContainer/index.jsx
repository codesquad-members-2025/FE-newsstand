import styled from "styled-components";
import { useEffect, useState, useRef } from "react";
import NewsContainer from "./NewsContainer";

const RollingBarWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  padding-top: 2.5rem;
`;

export default function AutoNewsBarContainer() {
  const [headLineNews, setheadLineNews] = useState([]);
  const nowRef = useRef(0);
  // const isHoverRightRef = useRef(false);
  // const isHoverLefttRef = useRef(false);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:3000/api/HeadLineNews");
      const data = await res.json();
      setheadLineNews(() => data.newsHeadLine);
    }
    fetchData();
  }, []);

  useEffect(() => {
    nowRef.current = performance.now();
  }, []);

  if (headLineNews.length === 0) return null;
  const leftNewsData = headLineNews.slice(0, 5);
  const rightNewsData = headLineNews.slice(5);

  return (
    <RollingBarWrapper>
      <NewsContainer
        // isHoverRef={isHoverLefttRef}

        // onMouseEnter={() => {
        //   isHoverLefttRef.current = true;
        // }}
        // onMouseLeave={() => {
        //   isHoverLefttRef.current = false;
        // }}
        leftNewsData={leftNewsData}
        startDelayMs={0}
        nowRef={nowRef}
      />
      <NewsContainer
        // isHoverRef={isHoverRightRef}

        // onMouseEnter={() => {
        //   isHoverRightRef.current = true;
        // }}
        // onMouseLeave={() => {
        //   isHoverRightRef.current = false;
        // }}
        rightNewsData={rightNewsData}
        startDelayMs={1000}
        nowRef={nowRef}
      />
    </RollingBarWrapper>
  );
}
