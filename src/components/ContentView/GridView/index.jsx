import styled from "styled-components";
import React, { useContext } from "react";
import { ThemeContext } from "../../../utils/ThemeContext";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(6, auto);
  width: 58.13rem;
  height: 24.25rem;
  background-color: ${({ theme }) => theme.border.default};
  gap: 0.063rem;
  padding: 0.063rem;
`;
const GridItem = styled.div`
  background-color: ${({ theme }) => theme.surface.default};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: auto;
    height: 1.25rem;
  }
`;
function makeItems(items) {
  const newsLogos = items.map(([name, logoUrl], idx) => {
    return (
      <GridItem key={idx}>
        <img src={logoUrl} alt={name} />
      </GridItem>
    );
  });

  return newsLogos;
}

export default function GridView({ items }) {
  return <GridContainer>{makeItems(items)}</GridContainer>;
}
