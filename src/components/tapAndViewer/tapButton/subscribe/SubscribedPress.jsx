import styled from "styled-components";

const StyledDiv = styled.div`
  color: #879298;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  font-weight: 500;
`;
export default function SubscribedPress() {
  return <StyledDiv>내가 구독한 언론사</StyledDiv>;
}
