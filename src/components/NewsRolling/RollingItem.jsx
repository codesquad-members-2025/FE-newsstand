import styled from '@emotion/styled';
import { useEffect, useState, useRef } from 'react';

const Wrapper = styled.div`
  width: 100%;
  height: 49px;
  overflow: hidden;
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.border.default};
`;

const InnerList = styled.div`
  display: flex;
  flex-direction: column;
  transition: ${({ isSliding }) =>
    isSliding ? 'transform 0.5s ease-in-out' : 'none'};
  transform: ${({ isSliding }) =>
    isSliding ? 'translateY(-49px)' : 'translateY(0)'};
`;

const RollingItemContainer = styled.div`
  width: 100%;
  height: 49px;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 0 16px;
  color: ${({ theme }) => theme.colors.text.strong};
  background-color: ${({ theme }) => theme.colors.surface.alt};
  ${({ theme }) => theme.typography.b14}
`;

const NewsSource = styled.span`
  font-weight: bold;
`;

const NewsTitle = styled.span`
  flex-grow: 1;
  color: ${({ theme }) => theme.colors.text.default};
  ${({ theme }) => theme.typography.m14}

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const RollingItem = ({ data }) => {
  const [index, setIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const timeoutRef = useRef(null);

  const visibleItems = [
    data[index % data.length],
    data[(index + 1) % data.length],
  ];

  function handlePause() {
    clearInterval(timeoutRef.current);
  }

  function handleResume() {
    handlePause(); // 혹시라도 남아있는 타이머 제거
    scheduleNextSlide(); // 다시 시작
  }

  function scheduleNextSlide() {
    timeoutRef.current = setTimeout(() => {
      setIsSliding(true);

      // 1. 슬라이딩 완료 후: 위치 리셋 + 데이터 전환
      setTimeout(() => {
        setIsSliding(false);
        setIndex((prev) => prev + 1);
        scheduleNextSlide(); // 재귀 호출로 반복
      }, 500); // transition 시간과 일치
    }, 5000); // 슬라이딩 간격
  }

  useEffect(() => {
    scheduleNextSlide();
    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <Wrapper onMouseEnter={handlePause} onMouseLeave={handleResume}>
      <InnerList index={index} isSliding={isSliding}>
        {visibleItems.map((news, idx) => (
          <RollingItemContainer key={idx}>
            <NewsSource>{news.press}</NewsSource>
            <NewsTitle>{news.title}</NewsTitle>
          </RollingItemContainer>
        ))}
      </InnerList>
    </Wrapper>
  );
};

export default RollingItem;
