import styled from "styled-components";

const MainNewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  img {
    width: 20rem;
    height: 12.5rem;
  }
  a {
    color: ${({ theme }) => theme.font.strong};
    font-weight: 500;
  }
`;

export default function MainNews({ MainNews }) {
  return (
    <MainNewsWrapper>
      <img src={MainNews.image} />
      <a href={MainNews.url}>{MainNews.title}</a>
    </MainNewsWrapper>
  );
}
