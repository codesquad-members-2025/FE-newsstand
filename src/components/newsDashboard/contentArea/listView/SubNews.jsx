import styled from "styled-components";

const flexColumn = `
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  ${flexColumn}
  gap:16px;
`;

const NewsTitle = styled.div`
  ${flexColumn}
  gap: 16px;
  font: var(--available-medium16);
  color: var(--text-bold);
  line-height: 22px;
`;

const Caption = styled.span`
  font: var(--display-medium14);
  color: var(--text-weak);
`;

function SubNews() {
  return (
    <Container>
      <NewsTitle>
        <span>"위스키 사려고 이틀 전부터 줄 섰어요"</span>
        <span>'방시혁 제국'이냐 '카카오 왕국'이냐…K엔터 누가 거머쥘까</span>
        <span>사용후핵연료 저장시설 포화…이대론 7년 뒤 원전 멈춘다</span>
        <span>
          [단독] 원희룡 "해외건설 근로자 소득공제 월 500만원으로 상향할 것"
        </span>
        <span>태평양에는 우영우의 고래만 있는게 아니었다 [로비의 그림]</span>
        <span>LG엔솔, 폴란드 자동차산업협회 가입…“유럽서 목소리 키운다”</span>
      </NewsTitle>
      <Caption>서울경제 언론사에서 직접 편집한 뉴스입니다.</Caption>
    </Container>
  );
}

export default SubNews;
