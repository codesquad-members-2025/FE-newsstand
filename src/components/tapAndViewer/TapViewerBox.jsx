import styled from "styled-components";
import AllPress from "./tapButton/AllPress";
import SubscribedPress from "./tapButton/subscribe/SubscribedPress";
import GridViewBtn from "./viewerButton/GridViewBtn";
import ListViewBtn from "./viewerButton/ListViewBtn";
import Container from "../../style/Container";
import Bedge from "./tapButton/subscribe/Bedge";

const FlexRowWrapper = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 1.56rem;
`;

const LeftGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 15rem;
`;

const RightGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
`;

const SubscribeGroup = styled.div`
  display: flex;
  gap: 0.25rem;
`;

export default function TapViewerBox() {
  return (
    <FlexRowWrapper>
      <LeftGroup>
        <AllPress />
        <SubscribeGroup>
          <SubscribedPress />
          <Bedge />
        </SubscribeGroup>
      </LeftGroup>
      <RightGroup>
        <GridViewBtn />
        <ListViewBtn />
      </RightGroup>
    </FlexRowWrapper>
  );
}
