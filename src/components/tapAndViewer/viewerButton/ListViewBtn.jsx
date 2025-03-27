import styled from "styled-components";
import listViewIcon from "@icons/list-view.svg";

const StyledImg = styled.img`
  padding: 0.19rem;
`;

export default function ListViewBtn() {
  return <StyledImg src={listViewIcon} />;
}
