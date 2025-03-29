import styled from "styled-components";
import listIcon from "../../../icons/listView.svg";
import gridIcon from "../../../icons/gridView.svg";

const DisplayButtons = styled.div`
  display: flex;
  gap: 8px;
`;

const Button = styled.button`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ListButton = styled.div`
  width: 18px;
  height: 18px;
  mask-image: url("${listIcon}");
  mask-size: cover;
  mask-repeat: no-repeat;
  background-color: var(--text-weak);
`;

const GridButton = styled.div`
  width: 18px;
  height: 18px;
  mask-image: url("${gridIcon}");
  mask-size: cover;
  mask-repeat: no-repeat;
  background-color: var(--text-weak);
  &.selectedMode {
    background-color: var(--surface-brand-alt);
  }
`;

function displayMode() {
  return (
    <DisplayButtons>
      <Button className="listView">
        <ListButton />
      </Button>
      <Button className="gridView">
        <GridButton className="selectedMode" />
      </Button>
    </DisplayButtons>
  );
}

export default displayMode;
