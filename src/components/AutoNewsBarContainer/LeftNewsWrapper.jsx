import styled from "styled-components";
import NewsItem from "./NewsItem";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

function makeNewsItem(newsData) {
  return newsData.map(({ name, title, url }, idx) => (
    <NewsItem name={name} title={title} url={url} key={idx} />
  ));
}

export default function LeftNewsWrapper({ newsData }) {
  return (
    <>
      <StyledDiv>{makeNewsItem(newsData)}</StyledDiv>
    </>
  );
}
