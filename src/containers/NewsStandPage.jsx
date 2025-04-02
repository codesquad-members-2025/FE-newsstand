import styled from "styled-components";
import TopHeader from "../components/TopHeader/TopHeader";
import AutoRollingNews from "../components/AutoHeadline/AutoRollingNews";
import TapViewerBox from "../components/tapAndViewer/tapViewerBox";
import ContentView from "../components/ContentView";
import { useState } from "react";
import SubscribedProvider from "../utils/Subscribed/SubscribedProvider";
const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const AutoNewsBarContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  padding-top: 2.5rem;
`;

export default function NewsStandPage() {
  const [listView, setlistView] = useState(true);
  const [press, setpress] = useState(true);

  return (
    <PageLayout>
      <TopHeader />
      <AutoNewsBarContainer>
        <AutoRollingNews />
        <AutoRollingNews />
      </AutoNewsBarContainer>
      <SubscribedProvider>
        <TapViewerBox setpress={setpress} toggleListView={setlistView} />
        <ContentView isAllpress={press} listView={listView} />
      </SubscribedProvider>
    </PageLayout>
  );
}
22;
