import styled from "styled-components";
import MainNews from "./MainNews.jsx";
import SubNews from "./SubNews.jsx";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
`;

function News() {
  return (
    <Container>
      <MainNews />
      <SubNews />
    </Container>
  );
}

export default News;
