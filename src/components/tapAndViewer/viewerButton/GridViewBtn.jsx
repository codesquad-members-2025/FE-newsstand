import styled from "styled-components";
import gridViewIcon from "@icons/grid-view.svg";

const StyledImg = styled.img`
  padding: 0.19rem;
`;

export default function GridViewBtn() {
  return <StyledImg src={gridViewIcon} />;
}
