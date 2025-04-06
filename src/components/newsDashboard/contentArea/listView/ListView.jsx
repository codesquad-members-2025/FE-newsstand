import styled from "styled-components";
import FieldTab from "./FieldTab.jsx";
import PressNewsBody from "./PressNewsBody.jsx";

const NewsList = styled.div`
  background-color: var(--surface-default);
  border: 1px solid var(--border-default);
`;

function ListContentArea() {
  return (
    <NewsList>
      <FieldTab />
      <PressNewsBody />
    </NewsList>
  );
}

export default ListContentArea;
