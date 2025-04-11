import styled from "styled-components";

const StyledButton = styled.button`
  all: unset;
  color: ${({ $press, theme }) =>
    $press ? theme.text.weak : theme.text.strong};
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  font-weight: 500;
`;
export default function SubscribedPress({ press, showSubscribedpress }) {
  return (
    <StyledButton $press={press} onClick={showSubscribedpress}>
      내가 구독한 언론사
    </StyledButton>
  );
}
