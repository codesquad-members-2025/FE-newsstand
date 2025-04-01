import styled from "styled-components";
import PressInfo from "./PressInfo.jsx";
import News from "./News.jsx";

const ContentBody = styled.div`
  height: 348px;
  box-sizing: border-box;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

function PressNewsBody() {
  return (
    <ContentBody>
      <PressInfo />
      <News />
    </ContentBody>
  );
}

export default PressNewsBody;
