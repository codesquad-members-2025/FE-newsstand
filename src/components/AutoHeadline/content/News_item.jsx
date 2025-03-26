import styled from "styled-components";

const StyledA = styled.a`
  color: #5f6e76;
  font-weight: 500;
`;

export default function NewsItem({ children, url }) {
  return (
    <StyledA href={url} target="_blank" rel="noopener noreferrer">
      {children}
    </StyledA>
  );
}
