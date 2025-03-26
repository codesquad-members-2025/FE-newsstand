import styled from "styled-components";
import NewsLogoTitle from "./NewsLogoTitle";
import TodaysDate from "./TodaysDate";
import Container from "@/style/Container";

const StyledDiv = styled.div`
  height: 5.44rem;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0 10.94rem;
`;

export default function TopHeader() {
  return (
    <Container>
      <StyledDiv>
        <NewsLogoTitle />
        <TodaysDate />
      </StyledDiv>
    </Container>
  );
}
