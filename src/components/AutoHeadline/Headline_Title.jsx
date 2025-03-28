import styled from "styled-components";

const StyledDiv = styled.div`
  color: ${({ theme }) => theme.text.strong};
  font-weight: 700;
  width: 3.06rem;
  height: 1.06rem;
`;

export default function HeadLineTitle() {
  return <StyledDiv>{"연합뉴스"}</StyledDiv>;
}
