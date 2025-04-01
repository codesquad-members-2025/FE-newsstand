import styled from "styled-components";
import FieldTab from "./FieldTab.jsx";
import PressNews from "./PressNewsBody.jsx";

const NewsList = styled.div`
  background-color: var(--surface-default);
  border: 1px solid var(--border-default);
`;

function ListContentArea() {
  return (
    <NewsList>
      <FieldTab />
      <PressNews />
    </NewsList>
  );
}

export default ListContentArea;
