import styled from "styled-components";
import React, { useContext } from "react";
import { ThemeContext } from "../../../utils/ThemeContext";
import SubScribedButton from "../../../utils/Buttons/SubScribedButton";

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
  position: relative;
  background-color: ${({ theme }) => theme.surface.default};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: auto;
    height: 1.25rem;
  }
  &:hover .subscribe-btn {
    opacity: 1;
    visibility: visible;
  }

  &:hover {
    background-color: ${({ theme }) => theme.surface.alt};
  }
  &:hover img {
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.2s ease;
  }
`;
const ButtonWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function makeItems(pagedData, theme) {
  const newsLogos = pagedData.map(({ logoDark, logoLight, pressId, name }) => {
    return (
      <GridItem key={pressId}>
        <img src={theme === "light" ? logoLight : logoDark} alt={name} />
        <ButtonWrapper>
          <SubScribedButton id={pressId} width={4.5} visible={false}>
            구독하기
          </SubScribedButton>
        </ButtonWrapper>
      </GridItem>
    );
  });
  return newsLogos;
}

export default function GridView({ pagedData }) {
  const { theme } = useContext(ThemeContext);

  return <GridContainer>{makeItems(pagedData, theme)}</GridContainer>;
}
