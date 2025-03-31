import styled from "styled-components";
import HeaderTab from "./HeaderTab";
import NewsTab from "./NewsTab";

const ListViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 21.75rem;
  border: ${({ theme }) => theme.border.default};
`;

export default function ListView({ categoryNews, page }) {
  return (
    <ListViewWrapper>
      <HeaderTab />
      <NewsTab categoryNews={categoryNews} page={page} />
    </ListViewWrapper>
  );
}
