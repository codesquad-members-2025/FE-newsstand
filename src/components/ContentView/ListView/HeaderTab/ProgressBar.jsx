import styled from "styled-components";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    console.log(page);
    setProgress(0);
    const intervalId = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          swipeNextPage();
          return 0;
        }
        return prev + 1;
      });
    }, 100);
    return () => clearInterval(intervalId);
  }, [page, curCategory]);
  //의존성배열:페이지넘기면 리렌더링,카테고리 넘어가면 리렌더링
  return <ProgressBarWrapper $progress={progress} />;
}
