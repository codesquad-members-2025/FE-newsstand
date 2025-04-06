import styled from "styled-components";
import NewsWrapper from "./NewsWrapper";

const StyledDiv = styled.div`
  background-color: ${({ theme }) => theme.surface.alt};
  border: 1px solid ${({ theme }) => theme.border.default};
  width: 28.81rem;
  height: 3.06rem;
  padding: 1rem;
  font-size: 0.88rem;
  overflow: hidden;
`;

export default function NewsContainer({ newsData }) {
  return (
    <>
      <StyledDiv>
        <NewsWrapper newsData={newsData} />
      </StyledDiv>
    </>
  );
}
