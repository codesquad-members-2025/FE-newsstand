import styled from "styled-components";
import NewsItem from "./NewsItem";
import { useState, useRef, useEffect } from "react";
import { startRolling } from "./startRolling";
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

function makeNewsItem(newsData) {
  return newsData.map(({ name, title, url }, idx) => (
    <NewsItem name={name} title={title} url={url} key={idx} />
  ));
}

export default function RollingNewsWrapper({ newsData, startDelayMs, nowRef }) {
  const newsRef = useRef();
  const [curNews, setcurNews] = useState(0);
  // const [isHover, setisHover] = useState(false); -> 호버의 상태가 바뀐다고 재렌더링이 발생해야할까?
  const indexRef = useRef(0);
  const hasStartedRef = useRef(false); //중복 실행 방지
  const locationRef = useRef(0);
  const rafIdRef = useRef(0);
  const isHoverRef = useRef(false);
  const lastSlideTimeRef = useRef(0);
  const hoverOverTimeRef = useRef(null);

  const newsSet =
    curNews === newsData.length - 1
      ? [newsData[curNews], newsData[0]]
      : newsData.slice(curNews, curNews + 2);

  function startRollingHandler() {
    startRolling(
      newsRef,
      indexRef,
      5000,
      setcurNews,
      locationRef,
      rafIdRef,
      isHoverRef,
      lastSlideTimeRef,
      hoverOverTimeRef,
      nowRef
    );
  }

  useEffect(() => {
    if (hasStartedRef.current) return;
    hasStartedRef.current = true;
    newsRef.current.style.transform = `translateY(${locationRef.current}px)`;

    if (startDelayMs !== 0) {
      setTimeout(() => {
        startRollingHandler();
      }, startDelayMs);
    } else {
      startRollingHandler();
    }

    return () => {
      cancelAnimationFrame(rafIdRef.current);
      hasStartedRef.current = false;
    };
  }, [curNews]);

  return (
    <>
      <StyledDiv
        onMouseEnter={() => (isHoverRef.current = true)}
        onMouseLeave={() => {
          isHoverRef.current = false;
          hoverOverTimeRef.current = performance.now();
        }}
        ref={newsRef}
      >
        {makeNewsItem(newsSet)}
      </StyledDiv>
    </>
  );
}
