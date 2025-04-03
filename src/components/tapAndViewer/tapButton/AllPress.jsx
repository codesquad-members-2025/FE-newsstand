import styled from "styled-components";

const StyledButton = styled.button`
  all: unset;
  color: ${({ theme }) => theme.text.strong};
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  font-weight: 700;
`;

export default function AllPress({ showAllpress }) {
  return <StyledButton onClick={showAllpress}>전체 언론사</StyledButton>;
}
