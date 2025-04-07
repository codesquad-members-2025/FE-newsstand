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
  maxPage
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
}) {
  return (
    <TabButtonWrapper>
      {makeTabButtons(newsCategory, moveCategory, curCategory, page, maxPage)}
    </TabButtonWrapper>
  );
}
