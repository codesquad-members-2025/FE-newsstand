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

// function parseCurrentPageNews(newsData, page) {
//   const currentPageNews = newsData[page];
//   return currentPageNews;
// }
//상위 컴포넌트에서 한개의 페이지 데이터를 줘서 이제 필요없음

export default function NewsTab({ pagedData }) {
  // const currentNews = parseCurrentPageNews(categoryNews, page); //한 페이지 뉴스 데이터-> 객체

  return (
    <NewsListWrapper>
      <PressInformation pagedData={pagedData} />
      <PressNewsWrapper>
        <MainNews mainNews={pagedData.materials[0]} />
        <SubNews
          subNews={pagedData.materials.slice(1)}
          pressName={pagedData.name}
        />
      </PressNewsWrapper>
    </NewsListWrapper>
  );
}
