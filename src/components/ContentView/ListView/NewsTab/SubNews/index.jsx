import styled from "styled-components";

const SubNewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SubNewsArticle = styled.a`
  color: ${({ theme }) => theme.text.strong};
  font-weight: 500;
`;

const Caption = styled.div`
  font-weight: 500;
  font-size: 0.88rem;
`;

function makeArticles(newsdata) {
  return newsdata.map((news, idx) => {
    const title = news.title;
    const url = news.url;
    return (
      <SubNewsArticle key={idx} href={url}>
        {title}
      </SubNewsArticle>
    );
  });
}

function captionComment(press) {
  const comment = `${press} 언론사에서 직접 편집한 뉴스입니다.`;
  return comment;
}

export default function SubNews({ subNews, pressName }) {
  return (
    <SubNewsWrapper>
      {makeArticles(subNews)}
      <Caption>{captionComment(pressName)}</Caption>
    </SubNewsWrapper>
  );
}
