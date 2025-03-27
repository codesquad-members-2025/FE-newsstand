import styled from "styled-components";

const StyledDiv = styled.div`
  color: #14212b;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  font-weight: 700;
`;

export default function AllPress() {
  return <StyledDiv>전체 언론사</StyledDiv>;
}
