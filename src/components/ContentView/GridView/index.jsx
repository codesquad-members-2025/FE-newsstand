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
function makeItems(pagedData, theme) {
  const newsLogos = pagedData.map(({ logoDark, logoLight, pressId, name }) => {
    return (
      <GridItem key={pressId}>
        <img src={theme === "light" ? logoLight : logoDark} alt={name} />
      </GridItem>
    );
  });
  return newsLogos;
}

export default function GridView({ pagedData }) {
  const { theme } = useContext(ThemeContext);

  return <GridContainer>{makeItems(pagedData, theme)}</GridContainer>;
}
