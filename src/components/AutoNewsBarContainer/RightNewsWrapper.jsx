import styled from "styled-components";
import NewsItem from "./NewsItem";
import { useState, useRef, useEffect } from "react";
import { rollinginterval } from "./rollingController";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

function makeNewsItem(newsData) {
  return newsData.map(({ name, title, url }, idx) => (
    <NewsItem name={name} title={title} url={url} key={idx} />
  ));
}

export default function RightNewsWrapper({
  isHoverRef,
  newsData,
  onMouseEnter,
  onMouseLeave,
}) {
  const newsRef = useRef();
  const [curNews, setcurNews] = useState(0);
  // const [isHover, setisHover] = useState(false); -> 호버의 상태가 바뀐다고 재렌더링이 발생해야할까?
  const indexRef = useRef(0);
  const hasStartedRef = useRef(false);

  const newsSet =
    curNews === newsData.length - 1
      ? [newsData[curNews], newsData[0]]
      : newsData.slice(curNews, curNews + 2);

  useEffect(() => {
    if (hasStartedRef.current) return;
    let isMounted = true;
    hasStartedRef.current = true;

    rollinginterval(newsRef, indexRef, 5000, 500, setcurNews, isHoverRef);

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <StyledDiv
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        ref={newsRef}
      >
        {makeNewsItem(newsSet)}
      </StyledDiv>
    </>
  );
}
