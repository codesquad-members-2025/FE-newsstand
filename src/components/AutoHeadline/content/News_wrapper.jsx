import styled from "styled-components";
import NewsItem from "./News_item";
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const newsArr = [
  [
    '추성훈, 故김새론 장례비 부담 안 했다.."가짜뉴스, 친분 없어"',
    "https://www.starnewskorea.com/stview.php?no=2025032614143124817&type=&cast=1&STAND=MTI1",
  ],
  [
    '"일상으로 돌아가길" 수지→이찬원·장민호, 산불 피해에 연예계 기부 행렬 [종합]',
    "https://www.starnewskorea.com/stview.php?no=2025032611353584938&type=&cast=1&STAND=MTI2",
  ],
];

const itemList = newsArr.map((news, idx) => {
  const [title, url] = news;
  return (
    <NewsItem url={url} key={idx}>
      {title}
    </NewsItem>
  );
});

export default function NewsWrapper() {
  return (
    <>
      <StyledDiv>{itemList}</StyledDiv>;
    </>
  );
}
