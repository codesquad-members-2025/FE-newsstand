import styled from "styled-components";
import MainNews from "./MainNews";
import SubNews from "./SubNews";
import PressInformation from "./PressInformation";

const NewsListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  gap: 1rem;
`;

const PressNewsWrapper = styled.div`
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  color: ${({ theme }) => theme.text.default};
`;

function parseCurrentPageNews(newsData, page) {
  const currentPageNews = newsData[page];
  return currentPageNews;
}

export default function NewsTab({ categoryNews, page }) {
  const currentNews = parseCurrentPageNews(categoryNews, page); //한 페이지 뉴스 데이터-> 객체

  return (
    <NewsListWrapper>
      <PressInformation newsInformation={currentNews} />
      <PressNewsWrapper>
        <MainNews mainNews={currentNews.materials[0]} />
        <SubNews
          subNews={currentNews.materials.slice(1)}
          pressName={currentNews.name}
        />
      </PressNewsWrapper>
    </NewsListWrapper>
  );
}
