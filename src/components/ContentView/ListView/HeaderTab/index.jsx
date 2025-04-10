import styled from "styled-components";
import TabButton from "./TabButton";

const TabButtonWrapper = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.surface.alt};
  width: 58.13rem;
  border-bottom: 1px solid ${({ theme }) => theme.border.default};
`;

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
    <TabButtonWrapper>
      {makeTabButtons(
        newsCategory,
        moveCategory,
        curCategory,
        page,
        maxPage,
        swipeNextPage,
        isAllpress
      )}
    </TabButtonWrapper>
  );
}
