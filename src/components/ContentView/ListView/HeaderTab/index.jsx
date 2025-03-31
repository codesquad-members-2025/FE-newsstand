import styled from "styled-components";
import TabButton from "./TabButton";

const TabButtonWrapper = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.surface.alt};
  width: 58.13rem;
`;

const newsCategory = [
  "종합/경제",
  "방송/통신",
  "IT",
  "영자지",
  "스포츠/연예",
  "매거진/전문지",
  "지역",
];

const tabButtons = newsCategory.map((category, idx) => {
  return <TabButton key={idx}>{category}</TabButton>;
});

export default function HeaderTab() {
  return <TabButtonWrapper>{tabButtons}</TabButtonWrapper>;
}
