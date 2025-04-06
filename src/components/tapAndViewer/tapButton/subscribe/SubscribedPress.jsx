import styled from "styled-components";

const StyledButton = styled.button`
  all: unset;
  color: ${({ theme }) => theme.text.weak};
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  font-weight: 500;
`;
export default function SubscribedPress({ showSubscribedpress }) {
  return (
    <StyledButton onClick={showSubscribedpress}>
      내가 구독한 언론사
    </StyledButton>
  );
}
