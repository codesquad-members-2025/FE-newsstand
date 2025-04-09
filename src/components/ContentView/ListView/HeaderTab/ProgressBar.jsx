import styled from "styled-components";
import { useEffect, useState, useRef } from "react";

const ProgressBarWrapper = styled.div`
  position: absolute;
  bottom: 0; /* 하단에 붙임 */
  left: 0;
  height: 100%;
  background-color: ${({ theme }) => theme.surface.brandDefault};
  transition: width 0.5s linear;
  width: ${({ $progress }) => `${$progress}%`};
  z-index: 1;
  opacity: 0.8;
`;

export default function ProgressBar({ swipeNextPage, page, curCategory }) {
  const [progress, setProgress] = useState(0);
  const hasSwipeRef = useRef(false);

  useEffect(() => {
    setProgress(0);
    hasSwipeRef.current = false;
    const intervalId = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100 && !hasSwipeRef.current) {
          hasSwipeRef.current = true;
          swipeNextPage();
          return 0;
        }
        return prev < 100 ? prev + 1 : prev;
      });
    }, 100);
    return () => clearInterval(intervalId);
  }, [page, curCategory]);
  //의존성배열:페이지넘기면 리렌더링,카테고리 넘어가면 리렌더링
  return <ProgressBarWrapper $progress={progress} />;
}
