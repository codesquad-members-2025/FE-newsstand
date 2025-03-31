import styled from "styled-components";
import TopHeader from "../components/TopHeader/TopHeader";
import AutoRollingNews from "../components/AutoHeadline/AutoRollingNews";
import Container from "../style/Container";
import TapViewerBox from "../components/tapAndViewer/tapViewerBox";
import ContentView from "../components/ContentView";
import { useState } from "react";
const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
`;
const AutoNewsBarContainer = styled(Container)`
  display: flex;
  gap: 0.5rem;
  padding-top: 2.5rem;
`;

export default function NewsStandPage() {
  const [listView, setlistView] = useState(true);

  return (
    <PageLayout>
      <TopHeader />
      <AutoNewsBarContainer>
        <AutoRollingNews />
        <AutoRollingNews />
      </AutoNewsBarContainer>
      <TapViewerBox toggleListView={setlistView} />
      <ContentView listView={listView} />
    </PageLayout>
  );
}
22;
