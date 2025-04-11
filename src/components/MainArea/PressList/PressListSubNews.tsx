import React, { FC } from "react"; // 리액트 및 타입 정의 import
import styled from "@emotion/styled"; // styled-components or emotion 사용 시 (선택)
import { pressType } from "../../../types/pressDataTypes"; // pressType 타입 import

interface MyComponentProps {
  // 컴포넌트에 필요한 props 타입을 정의
  data: (pressType & { category: string })[];
  pressIndex: number; // 인덱스
}

const PressListSubNews: FC<MyComponentProps> = ({ data, pressIndex }) => {
  // 데이터가 없거나 pressIndex 범위에 해당하는 데이터가 없는 경우
  if (!data || !data[pressIndex]) {
    console.error(
      "PressListMainNews: 유효한 뉴스 데이터가 존재하지 않습니다. pressIndex:",
      pressIndex
    );
    return <div>데이터를 불러올 수 없습니다.</div>;
  }

  console.log(data[pressIndex].materials);
  // const { logoDark, logoLight, materials, name, pid, regDate } = data[pressIndex];

  return (
    <Container>
      <div className="sub-news-title-area">
        <a href="">"위스키 사려고 이틀 전부터 줄 섰어요"</a>
      </div>
      <div className="sub-news-title-area">
        <a href="">'방시혁 제국'이냐 '카카오 왕국'이냐…K엔터 누가 거머쥘까</a>
      </div>
      <div className="sub-news-title-area">
        <a href="">사용후핵연료 저장시설 포화…이대론 7년 뒤 원전 멈춘다</a>
      </div>
      <div className="sub-news-title-area">
        <a href="">
          [단독] 원희룡 "해외건설 근로자 소득공제 월 500만원으로 상향할 것"
        </a>
      </div>
      <div className="sub-news-title-area">
        <a href="">태평양에는 우영우의 고래만 있는게 아니었다 [로비의 그림]</a>
      </div>
      <div className="sub-news-title-area">
        <a href="">LG엔솔, 폴란드 자동차산업협회 가입…“유럽서 목소리 키운다”</a>
      </div>
      <div className="sub-news-info">
        <p>서울경제 언론사에서 직접 편집한 뉴스입니다.</p>
      </div>
    </Container>
  );
};

export default PressListSubNews;

// 아래는 Emotion styled 예시 (선택)
const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(7, 22px);
  grid-row-gap: 1rem;

  .sub-news-title-area {
    display: flex;
    align-items: center;
    font-weight: ${({ theme }) => theme.typo.medium16};
    font-size: ${({ theme }) => theme.typo.medium16};
    line-height: ${({ theme }) => theme.typo.medium16};
  }

  .sub-news-info {
    font-weight: ${({ theme }) => theme.typo.medium14};
    font-size: ${({ theme }) => theme.typo.medium14};
    line-height: ${({ theme }) => theme.typo.medium14};
    color: ${({ theme }) => theme.colors.text.weak};
  }
`;
