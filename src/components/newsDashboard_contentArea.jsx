import styled from "styled-components";
import { useState, useEffect } from "react";

const GridContentArea = styled.div`
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  width: 930px;
  height: 388px;
  border: 1px solid var(--border-default);
`;

const Cell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
  return (
    <>
      <GridContentArea>
        {pressData.map((press) => (
          <Cell key={press.id} className="press">
            {press.name}
          </Cell>
        ))}
      </GridContentArea>
    </>
  );
}

export default newsDashboardContentArea;
