import styled from "styled-components";
import TabButton from "./TabButton";

const TabButtonWrapper = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.surface.alt};
  width: 58.13rem;
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

export default function HeaderTab({ newsData, moveCategory }) {
  const newsCategory = Object.keys(newsData);

  return (
    <TabButtonWrapper>
      {makeTabButtons(newsCategory, moveCategory)}
    </TabButtonWrapper>
  );
}
