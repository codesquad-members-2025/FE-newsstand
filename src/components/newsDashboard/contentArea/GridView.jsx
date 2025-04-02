import styled from "styled-components";
import { useState, useEffect } from "react";

const GridContent = styled.div`
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
  height: 97px;
`;

function GridContentArea({ activeTab }) {
  const [pressData, setPressData] = useState([]);

  useEffect(() => {
    fetch("/mockData.json")
      .then((response) => response.json())
      .then((data) => {
        activeTab === "AllPress"
          ? setPressData(data.AllPress)
          : setPressData(data.Subscribed);
      })
      .catch((error) => console.error("Error:", error));
  }, [activeTab]);

  const emptyCells = 24 - pressData.length;
  const filledCells = [...pressData, ...new Array(emptyCells).fill("")];

  return (
    <GridContent>
      {filledCells.map((press, index) => (
        <Cell key={press.id ?? `empty-${index}`} className="press">
          {press.name || ""}
        </Cell>
      ))}
    </GridContent>
  );
}

export default GridContentArea;
