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
    fetch("http://localhost:3000/pressList")
      .then((response) => response.json())
      .then((data) => {
        const subscribedIds = ["게임동아", "연합뉴스", "조선일보"];

        const filteredData =
          activeTab === "AllPress"
            ? data
            : data.filter((press) => subscribedIds.includes(press.name));

        setPressData(filteredData);
      })
      .catch((error) => console.error("Error:", error));
  }, [activeTab]);

  const emptyCells = Math.max(0, 24 - pressData.length);
  const filledCells = [...pressData, ...new Array(emptyCells).fill("")];

  return (
    <GridContent>
      {filledCells.map((press, index) => (
        <Cell key={press.name ?? `empty-${index}`} className="press">
          <img src={press.logoUrl || ""} height="20px" />
        </Cell>
      ))}
    </GridContent>
  );
}

export default GridContentArea;
