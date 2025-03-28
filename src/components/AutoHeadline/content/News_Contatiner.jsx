import styled from "styled-components";
import NewsWrapper from "./News_wrapper";
const StyledDiv = styled.div`
  width: 22.75rem;
  height: 1.06rem;
  overflow: hidden;
`;

export default function NewsContainer() {
  return (
    <>
      <StyledDiv>
        <NewsWrapper />
      </StyledDiv>
    </>
  );
}
