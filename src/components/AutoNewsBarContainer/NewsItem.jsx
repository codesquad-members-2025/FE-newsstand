import styled from "styled-components";

const StyledItem = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  font-weight: 500;
`;

const StyledTitle = styled.div`
  color: ${({ theme }) => theme.text.strong};
  font-weight: 700;
`;

const StyledNewsContent = styled.a`
  color: ${({ theme }) => theme.text.default};
`;

export default function NewsItem({ name, title, url }) {
  return (
    <StyledItem>
      <StyledTitle>{name}</StyledTitle>
      <StyledNewsContent href={url}>{title}</StyledNewsContent>
    </StyledItem>
  );
}
