/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

const StyledMainNewsItem = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: auto;
`;

const MainTitle = styled.div`
  ${({ theme }) => theme.typography.m16}
  color: ${({ theme }) => theme.colors.text.strong};
`;

export default function MainNewsItem({ mainNews }) {
  return (
    <StyledMainNewsItem>
      <Thumbnail src={mainNews.imageUrl} alt="뉴스 이미지" />
      <MainTitle>{mainNews.title}</MainTitle>
    </StyledMainNewsItem>
  );
}
