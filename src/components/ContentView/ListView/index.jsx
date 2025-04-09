import styled from "styled-components";
import HeaderTab from "./HeaderTab";
import NewsTab from "./NewsTab";

const ListViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* height: 21.75rem; */
  border: 1px solid ${({ theme }) => theme.border.default};
`;

export default function ListView({
  category,
  moveCategory,
  pagedData,
  newsCategory,
  page,
  maxPage,
  swipeNextPage,
}) {
  return (
    <ListViewWrapper>
      <HeaderTab
        page={page}
        maxPage={maxPage}
        curCategory={category}
        moveCategory={moveCategory}
        newsCategory={newsCategory}
        swipeNextPage={swipeNextPage}
      />
      <NewsTab pagedData={pagedData} />
    </ListViewWrapper>
  );
}
