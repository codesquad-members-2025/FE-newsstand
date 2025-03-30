import styled from "styled-components";
import listIcon from "../../../icons/listView.svg";
import gridIcon from "../../../icons/gridView.svg";
import { useState } from "react";

const DisplayButtons = styled.div`
  display: flex;
  gap: 8px;
`;

const Button = styled.button`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ListButton = styled.div`
  width: 18px;
  height: 18px;
  mask-image: url("${listIcon}");
  mask-size: cover;
  mask-repeat: no-repeat;
`;

const GridButton = styled.div`
  width: 18px;
  height: 18px;
  mask-image: url("${gridIcon}");
  mask-size: cover;
  mask-repeat: no-repeat;
`;

function getStyledDisplayMode(modeName, displayMode) {
  return {
    backgroundColor:
      modeName === displayMode ? "var(--text-point)" : "var(--text-weak)",
  };
}

function DisplayMode({ displayMode, setDisplayMode }) {
  function handleClick(modeName) {
    setDisplayMode(modeName);
  }

  return (
    <DisplayButtons>
      <Button>
        <ListButton
          style={getStyledDisplayMode("ListView", displayMode)}
          onClick={() => handleClick("ListView")}
        />
      </Button>
      <Button>
        <GridButton
          style={getStyledDisplayMode("GridView", displayMode)}
          onClick={() => handleClick("GridView")}
        />
      </Button>
    </DisplayButtons>
  );
}

export default DisplayMode;
