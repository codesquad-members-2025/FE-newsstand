/** @jsxImportSource @emotion/react */ // Emotion 사용 시 (선택)
import React, { FC } from "react"; // 리액트 및 타입 정의 import
import styled from "@emotion/styled"; // styled-components or emotion 사용 시 (선택)
import AutoRolling from "./AutoRolling";

// interface MyComponentProps {
//   // 컴포넌트에 필요한 props 타입을 정의
//   newsTitle?: string;
// }

const AutoRollingArea: FC = () => {
  const leftNews = [
    {
      "@type": "MATERIAL-PC-NEWSSTAND-HEADLINE",
      gdid: null,
      title: '추성훈, 故김새론 장례비 부담 안 했다.."가짜뉴스, 친분 없어"',
      url: "https://www.starnewskorea.com/stview.php?no=2025032614143124817&type=&cast=1&STAND=MTI1",
      aid: "b932d04bd6be2f0b",
      image: {
        url: "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2025%2F0326%2Farticle_img%2Fnew_main%2F9136%2F170101_001.jpg%22&type=nf312_208&service=navermain",
      },
      _id: "643542ba1f0f6898fc2221b9",
    },
    {
      "@type": "MATERIAL-PC-NEWSSTAND-HEADLINE",
      gdid: null,
      title:
        '"일상으로 돌아가길" 수지→이찬원·장민호, 산불 피해에 연예계 기부 행렬 [종합]',
      url: "https://www.starnewskorea.com/stview.php?no=2025032611353584938&type=&cast=1&STAND=MTI2",
      aid: "417949528577bd92",
      image: null,
      _id: "67b394cf08be660320b88c63",
    },
    {
      "@type": "MATERIAL-PC-NEWSSTAND-HEADLINE",
      gdid: null,
      title: '임영웅, 51억 펜트하우스 압류 당했다 해제 "세금납부 완료"',
      url: "https://www.starnewskorea.com/stview.php?no=2025032610514136518&type=&cast=1&STAND=MTIS",
      aid: "1b99c696e047a696",
      image: null,
      _id: "67ce5b614a916ab675e91f35",
    },
    {
      "@type": "MATERIAL-PC-NEWSSTAND-HEADLINE",
      gdid: null,
      title: '"SNS 언팔+차단당해"..10기 옥순♥유현철, 불화설',
      url: "https://www.starnewskorea.com/stview.php?no=2025032522244651295&type=&cast=1&STAND=MS",
      aid: "9a45b5197b671399",
      image: null,
      _id: "67ce5b614a916ab675e91f36",
    },
    {
      "@type": "MATERIAL-PC-NEWSSTAND-HEADLINE",
      gdid: null,
      title: "하정우, 급성 맹장 수술 후 회복 중",
      url: "https://www.starnewskorea.com/stview.php?no=2025032612000260397&type=&cast=1&STAND=MS",
      aid: "14910bde0bebc89e",
      image: null,
      _id: "67ce5b614a916ab675e91f37",
    },
  ];

  const rightNews = [
    {
      "@type": "MATERIAL-PC-NEWSSTAND-HEADLINE",
      gdid: null,
      title:
        "추성훈, 갈 데까지 갔다..♥야노시호 대놓고 도발 “맨날 화내 죽겠다”(추성훈)",
      url: "http://www.osen.co.kr/article/G1112530603",
      aid: "07c21c2108346ea1",
      image: {
        url: "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fnewsstand%2F2025%2F0326%2Farticle_img%2Fnew_main%2F9055%2F082601_001.jpg%22&type=nf312_208&service=navermain",
      },
      _id: "643542ba1f0f6898fc2221c0",
    },
    {
      "@type": "MATERIAL-PC-NEWSSTAND-HEADLINE",
      gdid: null,
      title:
        "엄기준, \"♥아내와 4개월만에 동거, 해맑음에 반해…나이 차 때문에 나도 어려져\" ('돌싱포맨') [종합]",
      url: "http://www.osen.co.kr/article/G1112531046",
      aid: "07c27a7971a8f239",
      image: null,
      _id: "66148b9cb1cbca13da5bf2e8",
    },
    {
      "@type": "MATERIAL-PC-NEWSSTAND-HEADLINE",
      gdid: null,
      title:
        "\"박물관에서 보관 제안\" 故김수미 유품→김무생, 현미 등 톱배우들 사진 '감탄' ('아빠하고 나하고')",
      url: "http://www.osen.co.kr/article/G1112530950",
      aid: "07c227fc16fe077c",
      image: null,
      _id: "66148b9cb1cbca13da5bf2e9",
    },
    {
      "@type": "MATERIAL-PC-NEWSSTAND-HEADLINE",
      gdid: null,
      title: "나나, 이렇게 말랐는데 복근은 선명..흔적도 없는 전신 타투",
      url: "http://www.osen.co.kr/article/G1112530390",
      aid: "07c211f25d17aef2",
      image: null,
      _id: "66148b9cb1cbca13da5bf2ea",
    },
    {
      "@type": "MATERIAL-PC-NEWSSTAND-HEADLINE",
      gdid: null,
      title:
        "슈, 도박 끊고 사업 대박났는데 “욕 먹어도 괜찮아..많이 덤덤해졌다”[전문]",
      url: "http://www.osen.co.kr/article/G1112531054",
      aid: "07c27a96402c3356",
      image: null,
      _id: "66148b9cb1cbca13da5bf2eb",
    },
  ];

  return (
    <Container>
      <AutoRolling position="left" news={leftNews} />
      <AutoRolling position="right" news={rightNews} />
    </Container>
  );
};

export default AutoRollingArea;

// 아래는 Emotion styled 예시 (선택)
const Container = styled.div`
  overflow: "hidden";
  display: grid;
  grid-template-rows: 3.063rem;
  grid-template-columns: 1fr 1fr;
  column-gap: 0.5rem;
`;
