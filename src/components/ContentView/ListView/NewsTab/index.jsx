import styled from "styled-components";
import MainNews from "./MainNews";
import SubNews from "./SubNews";
import PressInformation from "./PressInformation";

const NewsListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  gap: 1rem;
`;

const PressNewsWrapper = styled.div`
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  color: ${({ theme }) => theme.text.default};
`;

export default function NewsTab({ pagedData }) {
  return (
    <NewsListWrapper>
      <PressInformation pagedData={pagedData} />
      <PressNewsWrapper>
        <MainNews mainNews={pagedData.materials[0]} />
        <SubNews
          subNews={pagedData.materials.slice(1)}
          pressName={pagedData.name}
        />
      </PressNewsWrapper>
    </NewsListWrapper>
  );
}
