/** @jsxImportSource @emotion/react */ // Emotion 사용 시 (선택)
import React, { FC, useState, useEffect, useRef } from "react"; // 리액트 및 타입 정의 import
import styled from "@emotion/styled"; // styled-components or emotion 사용 시 (선택)
import { keyframes } from "@emotion/react";
import { NewsItem } from "../../types/pressDataTypes";

const CYCLE_TIME = 5000; // 5초 주기
const ANIMATION_TIME = 500; // 애니메이션 시간 (0.5초)

interface MyComponentProps {
  position: "left" | "right"; // 'left' 또는 'right' 중 하나의 값
  news?: NewsItem[];
}

const AutoRolling: FC<MyComponentProps> = ({ position, news }) => {
  const [currIndex, setCurrIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const offset = position === "left" ? 0 : 1000;

  const intervalRef = useRef<NodeJS.Timeout | null>(null); // 최초 업데이트 후 5초 주기로 계속 업데이트를 위한 setInterval 식별자
  const timeoutRef = useRef<NodeJS.Timeout | null>(null); // 최초 업데이트를 위한 setTimeout 식별자
  const startTimeRef = useRef(Date.now() + offset); // 시작 시간은 오프셋을 반영해 초기화 (우측은 1초 후 시작)
  const elapsedTimeRef = useRef(0); // 시작 후 경과 시간을 저장 (마우스 벗아날 때 시 계산)

  // 인덱스 업데이트 함수
  const updateIndexWithSlide = () => {
    if (!news || news.length === 0) return;
    setCurrIndex((prevCurrIndex) => {
      setPrevIndex(prevCurrIndex); // 이전 상태값을 prevIndex에 저장
      return (prevCurrIndex + 1) % news.length; // 최신 상태를 기준으로 새 인덱스를 계산
    });
    // 애니메이션 시간(0.5초) 후 이전 요소 제거 및 애니메이션 종료
    setTimeout(() => {
      setPrevIndex(null);
    }, ANIMATION_TIME);
  };

  // 5초 주기 이후에 최초 업데이트하고, 이후 매 5초마다 업데이트하는 타이머를 설정하는 함수
  const startRolling = () => {
    // 남은 시간 계산: 현재 시점과 시작 시간의 차이를 고려하여 남은 ms 계산
    const elapsed = Date.now() - startTimeRef.current;
    const remaining = CYCLE_TIME - (elapsed % CYCLE_TIME);

    // 최초 업데이트를 위한 setTimeout
    timeoutRef.current = setTimeout(() => {
      updateIndexWithSlide();
      // 최초 업데이트 후에는 5초 주기로 계속 업데이트
      intervalRef.current = setInterval(() => {
        updateIndexWithSlide();
      }, CYCLE_TIME);
    }, remaining);
  };

  useEffect(() => {
    setCurrIndex(0); // news가 바뀌면 인덱스 초기화
  }, [news]);

  // 롤링 시작 코드 - 마운트 시, 혹은 일시정지 상태가 해제될 때 타이머 시작
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

  // 이벤트 콜백 함수: 마우스가 영역에 들어가면 - 타이머를 정리하고, 남은 시간을 기록
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

  // 이벤트 콜백 함수: 마우스가 영역을 벗어나면 - 기록된 남은 시간에 오프셋을 추가한 후 타이머 재개
  const handleMouseLeave = () => {
    setIsPaused(false);
    // 타이머 재시작: 좌측은 그대로, 우측은 +1000ms 추가
    elapsedTimeRef.current = Date.now() - startTimeRef.current;
    const resumeDelay = CYCLE_TIME - (elapsedTimeRef.current % CYCLE_TIME);

    timeoutRef.current = setTimeout(() => {
      updateIndexWithSlide();
      // 타이머 재설정
      intervalRef.current = setInterval(() => {
        updateIndexWithSlide();
      }, CYCLE_TIME);
    }, resumeDelay);
  };

  // news 데이터가 없을 경우
  if (!news || news.length === 0 || currIndex >= news.length) {
    return (
      <Wrapper>
        <p className="rolling_left">연합뉴스</p>
        <p className="rolling_title">뉴스 데이터가 없습니다.</p>
      </Wrapper>
    );
  }

  return (
    <Wrapper onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <p className="rolling_press">연합뉴스</p>
      <RollingTitleWrapper isPaused={isPaused}>
        {prevIndex !== null && (
          <OldItem key={prevIndex}>
            <a href={news[prevIndex].url}>{news[prevIndex].title}</a>
          </OldItem>
        )}
        <NewItem key={currIndex}>
          <a href={news[currIndex].url}>{news[currIndex].title}</a>
        </NewItem>
      </RollingTitleWrapper>
    </Wrapper>
  );
};
export default AutoRolling;

// Emotion styled
/* 애니메이션 키프레임 */
const slideOutUp = keyframes`
  from { transform: translateY(0); }
  to { transform: translateY(-250%); }
`;

const slideInUp = keyframes`
  from { transform: translateY(250%); }
  to { transform: translateY(0); }
`;

/* 스타일드 컴포넌트 */
const Wrapper = styled.div`
  display: flex;
  border: 1px solid #ccc;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.surface.alt};
  border: ${({ theme }) => `1px solid ${theme.border.default}`};
  overflow: hidden;

  .rolling_press {
    width: 3.063rem;
    font-weight: ${({ theme }) => theme.typo.bold14.fontWeight};
    font-size: ${({ theme }) => theme.typo.bold14.fontSize};
    line-height: ${({ theme }) => theme.typo.bold14.lineHeight};
    color: ${({ theme }) => theme.colors.text.default};
  }
`;

// 제목 영역을 relative로 지정하여 내부 요소들이 절대 위치로 배치될 수 있도록 함
const RollingTitleWrapper = styled.div<{ isPaused: boolean }>`
  position: relative;
  width: 22rem;
  margin-left: 1rem;
  font-weight: ${({ theme }) => theme.typo.medium14.fontWeight};
  font-size: ${({ theme }) => theme.typo.medium14.fontSize};
  line-height: ${({ theme }) => theme.typo.medium14.lineHeight};
  a {
    color: ${({ theme }) => theme.colors.text.default};
    width: 21rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-decoration: ${({ isPaused }) => (isPaused ? "underline" : "none")};
  }
`;

// 이전 제목: 위로 슬라이드하며 사라짐
const OldItem = styled.div`
  position: absolute;
  width: 100%;
  animation: ${slideOutUp} 0.5s ease forwards;
`;

// 새 제목: 아래에서 위로 슬라이드하여 등장
const NewItem = styled.div`
  position: absolute;
  width: 100%;
  animation: ${slideInUp} 0.5s ease forwards;
`;
