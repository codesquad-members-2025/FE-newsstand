import styled from "styled-components";

const StyledButton = styled.button`
  all: unset;
  color: ${({ $press, theme }) =>
    $press ? theme.text.strong : theme.text.weak};
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  font-weight: 700;
`;

export default function AllPress({ showAllpress, press }) {
  return (
    <StyledButton $press={press} onClick={showAllpress}>
      전체 언론사
    </StyledButton>
  );
}
