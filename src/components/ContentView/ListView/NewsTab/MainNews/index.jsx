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
    color: ${({ theme }) => theme.text.strong};
    font-weight: 500;
  }
`;

export default function MainNews({ mainNews }) {
  return (
    <MainNewsWrapper>
      <img src={mainNews.image} />
      <a href={mainNews.url}>{mainNews.title}</a>
    </MainNewsWrapper>
  );
}
