/** @jsxImportSource @emotion/react */ // Emotion 사용 시 (선택)
import React, { FC, useState, useEffect, useRef } from "react"; // 리액트 및 타입 정의 import
import styled from "@emotion/styled"; // styled-components or emotion 사용 시 (선택)
import { NewsItem } from "../../types/pressDataTypes";

interface MyComponentProps {
  position?: string;
  news?: NewsItem[];
}

const AutoRolling: FC<MyComponentProps> = ({ position, news }) => {
  const [currIndex, setCurrIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const offset = position === "left" ? 0 : 1000;

  // 타이머, 타임아웃, 시작 시간, 남은 시간을 저장할 ref들
  const intervalRef = useRef<NodeJS.Timeout | null>(null); // 최초 업데이트 후 5초 주기로 계속 업데이트를 위한 setInterval 식별자
  const timeoutRef = useRef<NodeJS.Timeout | null>(null); // 최초 업데이트를 위한 setTimeout 식별자
  // 시작 시간은 오프셋을 반영해 초기화 (우측은 1초 후 시작)
  const startTimeRef = useRef<number>(Date.now() + offset);
  // 시작 후 경과 시간을 저장 (마우스 벗아날 때 시 계산)
  const elapsedTimeRef = useRef<number>(0);

  // 인덱스 업데이트 함수
  const updateIndex = () => {
    // if (!news || news.length === 0) return; // 안전 체크
    setCurrIndex((prev) => (prev + 1) % news.length);
    // 업데이트 시점을 재설정
    startTimeRef.current = Date.now();
  };

  // 5초 주기 이후에 최초 업데이트하고, 이후 매 5초마다 업데이트하는 타이머를 설정하는 함수
  const startRolling = () => {
    // 남은 시간 계산: 현재 시점과 시작 시간의 차이를 고려하여 남은 ms 계산
    const elapsed = Date.now() - startTimeRef.current;
    const remaining = 5000 - (elapsed % 5000);

    // 최초 업데이트를 위한 setTimeout
    timeoutRef.current = setTimeout(() => {
      updateIndex();
      // 최초 업데이트 후에는 5초 주기로 계속 업데이트
      intervalRef.current = setInterval(() => {
        updateIndex();
      }, 5000);
    }, remaining);
  };

  useEffect(() => {
    setCurrIndex(0); // news가 바뀌면 인덱스 초기화
  }, [news]);

  // 마운트 시, 혹은 일시정지 상태가 해제될 때 타이머 시작
  useEffect(() => {
    if (!isPaused) {
      startRolling();
    }
    // 컴포넌트 언마운트 시 타이머 클리어
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused]);

  // 마우스가 영역에 들어가면: 타이머를 정리하고, 남은 시간을 기록
  const handleMouseEnter = () => {
    setIsPaused(true);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // 마우스가 영역을 벗어나면: 기록된 남은 시간에 오프셋을 추가한 후 타이머 재개
  const handleMouseLeave = () => {
    setIsPaused(false);
    // 타이머 재시작: 좌측은 그대로, 우측은 +1000ms 추가
    elapsedTimeRef.current = Date.now() - startTimeRef.current;
    const resumeDelay = 5000 - (elapsedTimeRef.current % 5000) + offset;

    timeoutRef.current = setTimeout(() => {
      updateIndex();
      // 타이머 재설정
      startTimeRef.current = Date.now();
      intervalRef.current = setInterval(() => {
        updateIndex();
      }, 5000);
    }, resumeDelay);
  };

  // news?.map((newsItem) => {
  //   console.log(newsItem["@type"]);
  //   console.log(position);
  // });

  // news 데이터가 없을 경우
  console.log("news 상태:", news);
  console.log("currIndex 상태:", currIndex);
  if (!news || news.length === 0 || currIndex >= news.length) {
    return (
      <Container>
        <p className="rolling_left">연합뉴스</p>
        <p className="rolling_title">뉴스 데이터가 없습니다.</p>
      </Container>
    );
  }

  return (
    <Container onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <p className="rolling_press">연합뉴스</p>
      <p className="rolling_title">
        <a href={news[currIndex].url}> {news[currIndex].title}</a>
      </p>
    </Container>
  );
};
export default AutoRolling;

// Emotion styled
const Container = styled.div`
  display: flex;
  border: 1px solid #ccc;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.surface.alt};
  border: ${({ theme }) => `1px solid ${theme.border.default}`};

  .rolling_press {
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
