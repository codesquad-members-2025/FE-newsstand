/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

const StyledSubNewsList = styled.div`
  width: 500px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SubNewsItem = styled.div`
  ${({ theme }) => theme.typography.m16}
  color: ${({ theme }) => theme.colors.text.bold};

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default function SubNewsList({ subNewsList }) {
  return (
    <StyledSubNewsList>
      {subNewsList.map((news) => (
        <SubNewsItem key={news._id}>{news.title}</SubNewsItem>
      ))}
    </StyledSubNewsList>
  );
}
