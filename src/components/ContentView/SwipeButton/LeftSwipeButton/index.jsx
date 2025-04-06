import styled from "styled-components";
import BaseSwipeButton from "../../../../utils/BaseSwipeButton";

const StyledButton = styled(BaseSwipeButton)`
  fill: ${({ theme }) => theme.border.bold};
  visibility: ${({ $visible }) => ($visible ? "visible" : "hidden")};
`;

export default function LeftSwipeButton({ visible, swipePrevPage }) {
  return (
    <StyledButton $visible={visible} onClick={swipePrevPage}>
      <svg
        width="26"
        height="42"
        viewBox="0 0 26 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M25 1L1 21L25 41" />
      </svg>
    </StyledButton>
  );
}
