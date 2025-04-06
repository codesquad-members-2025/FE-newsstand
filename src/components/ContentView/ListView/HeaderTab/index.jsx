import styled from "styled-components";
import TabButton from "./TabButton";

const TabButtonWrapper = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.surface.alt};
  width: 58.13rem;
  border-bottom: 1px solid ${({ theme }) => theme.border.default};
`;

function makeTabButtons(newsCategory, moveCategory) {
  return newsCategory.map((category, idx) => {
    return (
      <TabButton dataCategory={category} moveCategory={moveCategory} key={idx}>
        {category}
      </TabButton>
    );
  });
}

export default function HeaderTab({ newsCategory, moveCategory }) {
  return (
    <TabButtonWrapper>
      {makeTabButtons(newsCategory, moveCategory)}
    </TabButtonWrapper>
  );
}
