import { useContext } from "react";
import { ThemeContext } from "../../../../../utils/ThemeContext";
import styled from "styled-components";
import SubScribedButton from "../../../../../utils/Buttons/SubScribedButton";
import formatDateTime from "../../../util/formatDateTime";

const NewsInformWrapper = styled.div`
  display: flex;
  gap: 1rem;
  color: ${({ theme }) => theme.text.default};
  align-items: center;
`;

const RegDate = styled.div`
  font-size: 0.75rem;
`;

export default function PressInformation({ pagedData }) {
  const { theme } = useContext(ThemeContext);
  const { logoDark, logoLight, pressId, regDate: rawRegDate } = pagedData;
  const pressLogo = theme === "light" ? logoLight : logoDark;
  const regDate = formatDateTime(rawRegDate);
  const subscribed = "구독하기"; //구독 조건에 따라 반 문자열 반환도 추후 고려

  return (
    <NewsInformWrapper>
      <img src={pressLogo} />
      <RegDate>{regDate}</RegDate>
      <SubScribedButton id={pressId} width={4.5}>
        {subscribed}
      </SubScribedButton>
    </NewsInformWrapper>
  );
}
