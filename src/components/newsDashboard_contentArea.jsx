import styled from "styled-components";

const GridContentArea = styled.div`
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  width: 930px;
  height: 388px;
  border: 1px solid var(--border-default);
`;

function newsDashboardContentArea() {
  return (
    <>
      <GridContentArea></GridContentArea>
    </>
  );
}

export default newsDashboardContentArea;
