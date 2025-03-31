import styled from "styled-components";
import BaseSwipeButton from "../../../../utils/BaseSwipeButton";

const StyledButton = styled(BaseSwipeButton)`
  fill: ${({ theme }) => theme.border.bold};
  background-color: ${({ theme }) => theme.surface.default};
  visibility: ${({ $visible }) => ($visible ? "visible" : "hidden")};
`;

export default function RightSwipeButton({ visible, swipeNextPage }) {
  return (
    <StyledButton $visible={visible} onClick={swipeNextPage}>
      <svg
        width="26"
        height="42"
        viewBox="0 0 26 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 41L25 21L1 1" />
      </svg>
    </StyledButton>
  );
}
