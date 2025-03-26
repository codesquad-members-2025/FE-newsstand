import styled from "styled-components";
import newspaper from "@icons/newspaper.svg";
const StyledDiv = styled.div`
  font-weight: 700;
  font-size: 1.5rem;
  color: #14212b;
`;

const StyledImg = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  filter: brightness(0) saturate(100%) invert(27%) sepia(71%) saturate(2134%)
    hue-rotate(214deg) brightness(102%) contrast(68%);
`;

const StyledContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export default function NewsLogoTitle() {
  const handleClick = () => {
    window.location.reload();
  };
  return (
    <StyledContainer onClick={handleClick}>
      <StyledImg src={newspaper} alt={"Newspaper Logo"} />
      <StyledDiv>뉴스스탠드</StyledDiv>
    </StyledContainer>
  );
}
