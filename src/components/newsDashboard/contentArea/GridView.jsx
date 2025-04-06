import styled from "styled-components";
import { useState, useEffect } from "react";
import leftIcon from "../../../assets/icons/leftButton.svg";
import rightIcon from "../../../assets/icons/rightButton.svg";

const GridWrapper = styled.div`
  position: relative;
  width: 930px;
  margin: 0 auto;
`;

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

const Button = styled.button`
  width: 24px;
  height: 40px;
  background-color: var(--border-bold);
  mask-size: cover;
  mask-repeat: no-repeat;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  &:disabled {
    display: none;
  }
`;

const LeftButton = styled(Button)`
  left: -47px;
  mask-image: url("${leftIcon}");
`;

const RightButton = styled(Button)`
  right: -47px;
  mask-image: url("${rightIcon}");
`;

function GridContentArea({ activeTab }) {
  const [pressData, setPressData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(pressData.length / 24);
  const startIdx = currentPage * 24;
  const endIdx = startIdx + 24;
  const currentData = pressData.slice(startIdx, endIdx);

  useEffect(() => {
    fetch("http://localhost:3000/pressList")
      .then((response) => response.json())
      .then((data) => {
        const subscribedName = ["MBN", "뉴스1", "JTBC"];

        const filteredData =
          activeTab === "AllPress"
            ? data
            : data.filter((press) => subscribedName.includes(press.name));

        setPressData(filteredData);
      })
      .catch((error) => console.error("Error:", error));
  }, [activeTab]);

  const emptyCells = 24 - currentData.length;
  const displayedData = [...currentData, ...new Array(emptyCells).fill("")];

  return (
    <GridWrapper>
      <LeftButton
        onClick={() => setCurrentPage((prev) => prev - 1)}
        disabled={currentPage === 0}
      />

      <GridContent>
        {displayedData.map((press, index) => (
          <Cell key={press.name ?? `empty-${index}`} className="press">
            <img src={press.logoUrl} height="20px" />
          </Cell>
        ))}
      </GridContent>

      <RightButton
        onClick={() => setCurrentPage((prev) => prev + 1)}
        disabled={currentPage === totalPages - 1}
      />
    </GridWrapper>
  );
}

export default GridContentArea;
