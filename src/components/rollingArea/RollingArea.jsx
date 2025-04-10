import styled from "styled-components";
import { useState, useEffect } from "react";

const RollingContainer = styled.div`
  margin-top: 40px;
  display: flex;
  gap: 8px;
`;

const RollingBox = styled.div`
  width: 461px;
  height: 49px;
  background-color: var(--surface-alt);
  border: 1px solid var(--border-default);
  box-sizing: border-box;
  overflow: hidden;
`;

const RollingList = styled.div``;

const RollingItem = styled.div`
  display: flex;
  gap: 16px;
  padding: 16px;
  align-items: center;
`;

const PressName = styled.div`
  font: var(--display-bold14);
  color: var(--text-strong);
`;

const PressNewsTitle = styled.div`
  width: 362px;
  font: var(--available-medium14);
  color: var(--text-default);
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const newsList = [
  { press: "연합뉴스", title: "[1보] 김기현·안철수 본경선 진출" },
  { press: "중앙일보", title: "[속보] 삼성전자 1분기 실적 발표" },
  { press: "한겨레", title: "서울시, 청년 월세 지원 대상 확대" },
  { press: "조선일보", title: "美 반도체 법안 통과…한국 영향은?" },
  { press: "경향신문", title: "기후변화로 여름 더 길어졌다" },
];

function maskExtendedList(list) {
  return [...list, list[0]];
}

function useRolling(newsList) {
  const extendedNewsList = maskExtendedList(newsList);
  const [index, setIndex] = useState(0);
  const [isTransition, setIsTransition] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((pre) => pre + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (index === extendedNewsList.length - 1) {
      setTimeout(() => {
        setIsTransition(false);

        requestAnimationFrame(() => {
          setIndex(0);

          requestAnimationFrame(() => {
            setIsTransition(true);
          });
        });
      }, 500);
    }
  }, [index]);

  const getRollingStyle = {
    transform: `translateY(-${index * 49}px)`,
    transition: isTransition ? "transform 0.5s ease-in-out" : "none",
  };

  return { list: extendedNewsList, getRollingStyle };
}

export default function RollingArea() {
  const rollingList1 = useRolling(newsList);
  const rollingList2 = useRolling(newsList);
  return (
    <RollingContainer>
      <RollingBox>
        <RollingList style={rollingList1.getRollingStyle}>
          {rollingList1.list.map((news, i) => (
            <RollingItem key={i}>
              <PressName>{news.press}</PressName>
              <PressNewsTitle as="a">{news.title}</PressNewsTitle>
            </RollingItem>
          ))}
        </RollingList>
      </RollingBox>
      <RollingBox>
        <RollingList style={rollingList2.getRollingStyle}>
          {rollingList2.list.map((news, i) => (
            <RollingItem key={i}>
              <PressName>{news.press}</PressName>
              <PressNewsTitle as="a">{news.title}</PressNewsTitle>
            </RollingItem>
          ))}
        </RollingList>
      </RollingBox>
    </RollingContainer>
  );
}
