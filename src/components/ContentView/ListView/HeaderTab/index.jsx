import styled from "styled-components";
import TabButton from "./TabButton";
import DraggableScroll from "./DraggableScroll";

const TabButtonContainer = styled.div`
  overflow-x: auto;
  width: 58.13rem;
  cursor: grab;
  user-select: none;
  scroll-behavior: smooth;
  scrollbar-width: none;

  /* &::-webkit-scrollbar {
    height: 2px;
  } */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari */
  }
  /* &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 2px;
  } */

  /* scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.3) transparent; */
`;

// const TabButtonWrapper = styled.div`
//   display: flex;
//   background-color: ${({ theme }) => theme.surface.alt};
//   border-bottom: 1px solid ${({ theme }) => theme.border.default};
// `;

function makeTabButtons(
  newsCategory,
  moveCategory,
  curCategory,
  page,
  maxPage,
  swipeNextPage,
  isAllpress
) {
  return newsCategory.map((category, idx) => {
    return (
      <TabButton
        page={page}
        maxPage={maxPage}
        curCategory={curCategory}
        dataCategory={category}
        moveCategory={moveCategory}
        key={idx}
        swipeNextPage={swipeNextPage}
        isAllpress={isAllpress}
      >
        {category}
      </TabButton>
    );
  });
}

export default function HeaderTab({
  page,
  maxPage,
  curCategory,
  newsCategory,
  moveCategory,
  swipeNextPage,
  isAllpress,
}) {
  return (
    <TabButtonContainer>
      <DraggableScroll>
        {makeTabButtons(
          newsCategory,
          moveCategory,
          curCategory,
          page,
          maxPage,
          swipeNextPage,
          isAllpress
        )}
      </DraggableScroll>
    </TabButtonContainer>
  );
}
