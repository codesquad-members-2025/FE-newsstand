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
}) {
  return (
    <ListViewWrapper>
      <HeaderTab
        curCategory={category}
        moveCategory={moveCategory}
        newsCategory={newsCategory}
      />
      <NewsTab pagedData={pagedData} />
    </ListViewWrapper>
  );
}
