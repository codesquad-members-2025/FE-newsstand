import { useContext } from "react";
import { ThemeContext } from "../../../../../utils/ThemeContext";
import styled from "styled-components";
import SubScribedButton from "../../../../../utils/Buttons/SubScribedButton";
import formatDateTime from "../../../util/formatDateTime";

const NewsInformWrapper = styled.div`
  display: flex;
  gap: 1rem;
  color: ${({ theme }) => theme.text.default};
`;

export default function PressInformation({ pagedData }) {
  const { theme } = useContext(ThemeContext);
  const pressLogo =
    theme === "light" ? pagedData.logoLight : pagedData.logoDark;
  const regDate = formatDateTime(pagedData.regDate);
  const subscribed = "구독하기"; //구독 조건에 따라 반 문자열 반환도 추후 고려

  return (
    <NewsInformWrapper>
      <img src={pressLogo} />
      <div>{regDate}</div>
      <SubScribedButton id={pagedData.pressId} width={4.5}>
        {subscribed}
      </SubScribedButton>
    </NewsInformWrapper>
  );
}
