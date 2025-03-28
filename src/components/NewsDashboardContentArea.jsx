import styled from "styled-components";
import { useState, useEffect } from "react";

const GridContentArea = styled.div`
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  width: 930px;
  height: 388px;
  border-top: 1px solid var(--border-default);
  border-left: 1px solid var(--border-default);
`;

const Cell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid var(--border-default);
  border-bottom: 1px solid var(--border-default);
`;

function newsDashboardContentArea() {
  const [pressData, setPressData] = useState([]);

  useEffect(() => {
    fetch("/mockData.json")
      .then((response) => response.json())
      .then((data) => {
        setPressData(data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  const emptyCells = 24 - pressData.length;
  const filledCells = [...pressData, ...new Array(emptyCells).fill("")];

  return (
    <GridContentArea>
      {filledCells.map((press, index) => (
        <Cell
          key={press.id ? `${press.id}` : `empty-${index}`}
          className="press"
        >
          {press.name || ""}
        </Cell>
      ))}
    </GridContentArea>
  );
}

export default newsDashboardContentArea;
