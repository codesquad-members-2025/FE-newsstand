import styled from "styled-components";
import TopHeader from "../components/TopHeader/TopHeader";
import TapViewerBox from "../components/tapAndViewer/TapViewerBox";
import ContentView from "../components/ContentView";
import { useState } from "react";
import SubscribedProvider from "../utils/Subscribed/SubscribedProvider";
import AutoNewsBarContainer from "../components/AutoNewsBarContainer";
import SubscribedModalProvider from "../utils/Subscribed/SubscribedModal/SubscribedModalProvider";

const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
// const AutoNewsBarContainer = styled.div`
//   display: flex;
//   gap: 0.5rem;
//   padding-top: 2.5rem;
// `;

export default function NewsStandPage() {
  const [listView, setlistView] = useState(false);
  const [press, setpress] = useState(true);

  return (
    <PageLayout>
      <TopHeader />
      <AutoNewsBarContainer />
      <SubscribedProvider>
        <TapViewerBox
          press={press}
          listView={listView}
          setpress={setpress}
          toggleListView={setlistView}
        />
        <SubscribedModalProvider>
          <ContentView isAllpress={press} listView={listView} />
        </SubscribedModalProvider>
      </SubscribedProvider>
    </PageLayout>
  );
}
22;
