import styled from "styled-components";
import BaseSwipeButton from "../../../../utils/BaseSwipeButton";

const StyledButton = styled(BaseSwipeButton)`
  visibility: ${({ $visible }) => ($visible ? "visible" : "hidden")};
`;
const StyledSVG = styled.svg`
  path {
    stroke: ${({ theme }) => theme.border.bold};
  }
`;

export default function RightSwipeButton({ visible, swipeNextPage }) {
  return (
    <StyledButton $visible={visible} onClick={swipeNextPage}>
      <StyledSVG
        width="26"
        height="42"
        viewBox="0 0 26 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 41L25 21L1 1" />
      </StyledSVG>
    </StyledButton>
  );
}
