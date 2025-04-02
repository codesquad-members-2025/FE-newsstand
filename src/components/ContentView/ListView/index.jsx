import styled from "styled-components";
import HeaderTab from "./HeaderTab";
import NewsTab from "./NewsTab";

const ListViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 21.75rem;
  border: ${({ theme }) => theme.border.default};
`;

export default function ListView({ moveCategory, pagedData, newsData }) {
  return (
    <ListViewWrapper>
      {/* HeaderTab도 작업 해야함!! 버튼 누르면 카테고리 이동 */}
      <HeaderTab moveCategory={moveCategory} newsData={newsData} />
      <NewsTab pagedData={pagedData} />
    </ListViewWrapper>
  );
}
