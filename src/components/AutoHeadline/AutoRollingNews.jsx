import styled from "styled-components";
import HeadLineTitle from "./Headline_Title";
import NewsContainer from "./content/News_Contatiner";
const StyledDiv = styled.div`
  background-color: #f5f7f9;
  border: 1px solid #d2dae0;
  width: 461px;
  height: 49px;
  padding: 16px;
  display: flex;
  gap: 16px;
  align-items: center;
  font-size: 14px;
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
