import styled from "styled-components";
import SubScribedButton from "../../../../../utils/Buttons/SubScribedButton";

const NewsInformWrapper = styled.div`
  display: flex;
  gap: 1rem;
  color: ${({ theme }) => theme.text.default};
`;

function formatDateTime(input) {
  const [datePart, timePart] = input.split(" ");

  const year = datePart.slice(0, 4);
  const month = datePart.slice(4, 6);
  const day = datePart.slice(6, 8);

  const time = timePart.slice(0, 5);

  return `${year}.${month}.${day}. ${time} 편집`;
}

export default function PressInformation({ newsInformation }) {
  const pressLogo = newsInformation.logoLight;
  const regDate = formatDateTime(newsInformation.regDate);
  const subscribed = "구독하기"; //구독 조건에 따라 반 문자열 반환도 추후 고려

  return (
    <NewsInformWrapper>
      <img src={pressLogo} />
      <div>{regDate}</div>
      <SubScribedButton width={4.5}>{subscribed}</SubScribedButton>
    </NewsInformWrapper>
  );
}
