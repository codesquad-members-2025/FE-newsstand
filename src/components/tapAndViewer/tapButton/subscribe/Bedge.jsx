import styled from "styled-components";

const StyledDiv = styled.div`
  color: ${({ theme }) => theme.text.whiteWeak};
  font-weight: 500;
  font-size: 0.75rem;
  border: 0.06rem solid ${({ theme }) => theme.surface.brandAlt};
  background-color: ${({ theme }) => theme.surface.brandAlt};
  border-radius: 0.5rem;
  padding: 0.19rem 0.34rem;
`;
export default function Bedge() {
  return <StyledDiv>8</StyledDiv>;
}
