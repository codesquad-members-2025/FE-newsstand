import React, { FC } from "react"; // 리액트 및 타입 정의 import
import styled from "@emotion/styled"; // styled-components or emotion 사용 시 (선택)
import { pressType } from "../../../types/pressDataTypes"; // pressType 타입 import
// import { useThemeState } from "../../../contexts/ThemeContext"; // 테마 상태 가져오기

interface MyComponentProps {
  // 컴포넌트에 필요한 props 타입을 정의
  data: (pressType & { category: string })[];
  pressIndex: number; // 인덱스
}

const PressListMainNews: FC<MyComponentProps> = ({ data, pressIndex }) => {
  // 데이터가 없거나 pressIndex 범위에 해당하는 데이터가 없는 경우
  if (!data || !data[pressIndex]) {
    console.error(
      "PressListMainNews: 유효한 뉴스 데이터가 존재하지 않습니다. pressIndex:",
      pressIndex
    );
    return <div>데이터를 불러올 수 없습니다.</div>;
  }

  const { image, title, url } = data[pressIndex].materials[0];
  console.log(image, title, url);

  return (
    <Container>
      <div className="main-news-thumbnail">
        <img src={image?.url} alt="메인 뉴스 썸네일" />
      </div>
      <div className="main-news-title">
        <a href={url}>{title}</a>
      </div>
    </Container>
  );
};

export default PressListMainNews;

// 아래는 Emotion styled 예시 (선택)
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  .main-news-title {
    margin-top: 1rem;
  }
`;
