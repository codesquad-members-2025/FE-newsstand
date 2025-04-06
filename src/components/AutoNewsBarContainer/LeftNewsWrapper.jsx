import styled from "styled-components";
import NewsItem from "./NewsItem";
import { useState, useRef, useEffect } from "react";
import { timeDelay } from "./rollingController";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

function makeNewsItem(newsData) {
  return newsData.map(({ name, title, url }, idx) => (
    <NewsItem name={name} title={title} url={url} key={idx} />
  ));
}

export default function LeftNewsWrapper({ newsData }) {
  const newsRef = useRef();
  const [curNews, setcurNews] = useState(0);

  function moveNewxtNews() {
    setcurNews((prev) => (prev + 1) % 5);
  }

  const newsSet =
    curNews === newsData.length - 1
      ? [newsData[curNews], newsData[0]]
      : newsData.slice(curNews, curNews + 2);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (!newsRef.current) return;
  //     setTimeout(() => {
  //       if (!newsRef.current) return;
  //       newsRef.current.style.transition = `transform 0.5s ease-out`;
  //       newsRef.current.style.transform = `translateY(-17px)`;
  //       // moveNewxtNews();
  //     }, 5000);
  //     return () => {
  //       clearInterval(interval);
  //     };
  //   }, 5500);
  // }, []);

  useEffect(() => {
    const runInterval = async () => {
      if (!newsRef.current) return;
      await timeDelay(1000);
      newsRef.current.style.transition = `transform 0.5s ease-out`;
      newsRef.current.style.transform = `translateY(-17px)`;
      await timeDelay(500);
      moveNewxtNews();
      newsRef.current.style.transition = `none`;
      newsRef.current.style.transform = `translateY(0px)`;
    };

    runInterval();
  }, [curNews]);

  return (
    <>
      <StyledDiv ref={newsRef}>{makeNewsItem(newsSet)}</StyledDiv>
    </>
  );
}
