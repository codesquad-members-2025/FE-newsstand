import styled from "styled-components";

const NewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  gap: 1rem;
`;

const NewsTitle = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  color: ${({ theme }) => theme.text.default};
  img {
    width: 0 0.03rem;
  }
`;
const NewsContentWrapper = styled.div`
  display: flex;
  gap: 2rem;
  align-items: flex-start;
`;
const MainNews = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  img {
    width: 20rem;
    height: 12.5rem;
  }
  div {
    color: ${({ theme }) => theme.font.strong};
    font-weight: 500;
  }
`;

export default function NewsTab() {
  return (
    <NewsWrapper>
      <NewsTitle></NewsTitle>
    </NewsWrapper>
  );
}
