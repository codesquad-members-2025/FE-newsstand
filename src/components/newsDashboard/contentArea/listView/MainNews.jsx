import styled from "styled-components";

const Container = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Thumbnail = styled.div`
  height: 200px;
  background-color: var(--surface-alt);
  border: 1px solid var(--border-default);
  box-sizing: border-box;
`;

const NewsTitleBox = styled.div`
  height: 44px;
`;

const NewsTitle = styled.h3`
  font: var(--available-medium16);
  color: var(--text-strong);
  line-height: 22px;
`;

function MainNews() {
  return (
    <Container>
      <Thumbnail />
      <NewsTitleBox>
        <NewsTitle>또 국민연금의 몽니…현대百 지주사 불발</NewsTitle>
      </NewsTitleBox>
    </Container>
  );
}

export default MainNews;
