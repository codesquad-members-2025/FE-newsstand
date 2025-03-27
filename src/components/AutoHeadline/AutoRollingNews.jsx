import styled from "styled-components";
import HeadLineTitle from "./Headline_Title";
import NewsContainer from "./content/News_Contatiner";
const StyledDiv = styled.div`
  background-color: #f5f7f9;
  border: 1px solid #d2dae0;
  width: 28.81rem;
  height: 3.06rem;
  padding: 1rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  font-size: 0.88rem;
`;

export default function AutoRollingNews() {
  return (
    <>
      <StyledDiv>
        <HeadLineTitle />
        <NewsContainer />
      </StyledDiv>
    </>
  );
}
