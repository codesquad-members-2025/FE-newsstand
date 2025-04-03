import styled from "styled-components";

const BaseSwipeButton = styled.button`
  all: unset;
  cursor: pointer;
  svg {
    fill: ${({ theme }) => theme.border.bold};
  }
`;

export default BaseSwipeButton;
