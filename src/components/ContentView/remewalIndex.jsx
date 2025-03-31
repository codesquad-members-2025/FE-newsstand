import { useEffect, useState } from "react";
import GridView from "./GridView";
import ListView from "./ListView";
import LeftSwipeButton from "./SwipeButton/LeftSwipeButton";
import RightSwipeButton from "./SwipeButton/RightSwipeButton";
import styled from "styled-components";
import parseOneCategoryNews from "./util/parseOneCategoryNews";

const ContentBoxWrapper = styled.div`
  display: flex;
  & > :nth-child(1) {
    margin-right: 2.94rem;
  }
  & > :nth-child(2) {
    margin-right: 3rem;
  }
`;
