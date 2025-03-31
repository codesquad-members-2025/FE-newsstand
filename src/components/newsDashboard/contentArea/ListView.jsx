import styled from "styled-components";

const ListContent = styled.div`
  background-color: var(--surface-default);
  border: 1px solid var(--border-default);
`;
const ListContentHeader = styled.div`
  height: 40px;
  background-color: var(--surface-alt);
  border-bottom: 1px solid var(--border-default);
  box-sizing: border-box;
`;
const ListContentBody = styled.div`
  height: 348px;
  box-sizing: border-box;
`;

function ListContentArea() {
  return (
    <ListContent>
      <ListContentHeader></ListContentHeader>
      <ListContentBody></ListContentBody>
    </ListContent>
  );
}

export default ListContentArea;
