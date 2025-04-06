import styled from "styled-components";
import LeftNewsWrapper from "./LeftNewsWrapper";
import RightNewsWrapper from "./RightNewsWrapper copy";

const OuterBox = styled.div`
  background-color: ${({ theme }) => theme.surface.alt};
  border: 1px solid ${({ theme }) => theme.border.default};
  width: 28.81rem;
  height: 3.06rem;
  padding: 1rem;
  font-size: 0.88rem;
`;
const InnerBox = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export default function NewsContainer(prop) {
  return (
    <>
      <OuterBox>
        <InnerBox>
          {prop.leftNewsData ? (
            <LeftNewsWrapper newsData={prop.leftNewsData} />
          ) : (
            <RightNewsWrapper newsData={prop.rightNewsData} />
          )}
        </InnerBox>
      </OuterBox>
    </>
  );
}
