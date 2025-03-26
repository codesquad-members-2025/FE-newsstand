import styled from "styled-components";
import getDates from "../../utils/getDates";

const StyledDiv = styled.div`
  font-weight: 500;
  font-size: 1rem;
  color: #5f6e76;
`;

export default function TodaysDate() {
  return (
    <>
      <StyledDiv>{getDates()}</StyledDiv>
    </>
  );
}
