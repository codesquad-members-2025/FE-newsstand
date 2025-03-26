import styled from "styled-components";
import NewsWrapper from "./News_wrapper";
const StyledDiv = styled.div`
  width: 364px;
  height: 17px;
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
