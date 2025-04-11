import { useContext } from "react";
import { ThemeContext } from "../../../../../utils/ThemeContext";
import styled from "styled-components";
import SubScribedButton from "../../../../../utils/Buttons/SubScribedButton";
import formatDateTime from "../../../util/formatDateTime";
import { SubscribedContext } from "../../../../../utils/Subscribed/SubscribedContext";
import { SubscribedModalContext } from "../../../../../utils/Subscribed/SubscribedModal/SubscribedModalContext";
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
  const { subscribed } = useContext(SubscribedContext); //모달에서 관리해야함
  const { clickSubscribedModal } = useContext(SubscribedModalContext);
  const isSubscribed = subscribed.includes(pressId) ? null : "구독하기";
  return (
    <NewsInformWrapper>
      <img src={pressLogo} />
      <RegDate>{regDate}</RegDate>
      <SubScribedButton
        id={pressId}
        width={isSubscribed ? 4.5 : 1.5}
        visible={true}
        // onClick={(e) => toggleSubscribed(e.currentTarget.id)}
        // onClick={toggleSubscribedModal}
        onClick={(e) => {
          clickSubscribedModal(
            e.currentTarget.id,
            pagedData.name,
            !isSubscribed
          );
        }}
      >
        {isSubscribed}
      </SubScribedButton>
    </NewsInformWrapper>
  );
}
