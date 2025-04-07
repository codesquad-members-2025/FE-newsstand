import styled from "styled-components";
import TabButton from "./TabButton";

const TabButtonWrapper = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.surface.alt};
  width: 58.13rem;
  border-bottom: 1px solid ${({ theme }) => theme.border.default};
`;

function makeTabButtons(newsCategory, moveCategory, curCategory) {
  return newsCategory.map((category, idx) => {
    return (
      <TabButton
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

export default function HeaderTab({ curCategory, newsCategory, moveCategory }) {
  return (
    <TabButtonWrapper>
      {makeTabButtons(newsCategory, moveCategory, curCategory)}
    </TabButtonWrapper>
  );
}
