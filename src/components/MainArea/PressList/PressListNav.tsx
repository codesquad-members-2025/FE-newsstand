import React, { FC } from "react"; // 리액트 및 타입 정의 import
import styled from "@emotion/styled"; // styled-components or emotion 사용 시 (선택)
import { pressType } from "../../../types/pressDataTypes"; // pressType 타입 import
import { useThemeState } from "../../../contexts/ThemeContext";

interface MyComponentProps {
  // 컴포넌트에 필요한 props 타입을 정의
  data: (pressType & { category: string })[];
  pressIndex: number; // 인덱스
}

const PressListNav: FC<MyComponentProps> = ({ data, pressIndex }) => {
  // 다크모드 여부 가져오기
  const { isDarkMode } = useThemeState();

  if (
    !data ||
    !data.length ||
    pressIndex < 0 ||
    pressIndex >= data.length ||
    !data[pressIndex].regDate
  ) {
    return <div>데이터가 준비되지 않았습니다.</div>;
  }

  const { logoDark, logoLight, regDate } = data[pressIndex] || {}; // 첫 번째 데이터 항목을 사용

  const [datePart, timePart] = regDate.split(" ");

  // 연, 월, 일을 추출합니다.
  const year = parseInt(datePart.slice(0, 4), 10);
  const month = String(parseInt(datePart.slice(4, 6), 10)).padStart(2, "0"); // 월은 1부터 12
  const day = String(parseInt(datePart.slice(6, 8), 10)).padStart(2, "0"); // 일을 2자리로 맞춥니다.

  // 시, 분, 초를 추출합니다.
  const [hour, minute] = timePart
    .split(":")
    .map((num) => String(parseInt(num, 10)).padStart(2, "0")); // 시, 분, 초를 2자리로 맞춥니다.

  return (
    <Container>
      <div>
        <img src={isDarkMode ? logoDark : logoLight} />
      </div>
      <div>
        <p>
          {year}.{month}.{day} {hour}:{minute} 편집
        </p>
      </div>
      <div>
        <img
          src="/src/assets/press-icons/SubscribeBtn.svg"
          alt="Subscribe button"
          // onClick={handleSubscribe}
        />
      </div>
    </Container>
  );
};

export default PressListNav;

// 아래는 Emotion styled 예시 (선택)
const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    height: 1.25rem;
    width: 3.281rem;
    margin-right: 1rem;
  }

  p {
    font-size: ${({ theme }) => theme.typo.medium12.fontSize};
    font-weight: ${({ theme }) => theme.typo.medium12.fontWeight};
    color: ${({ theme }) => theme.colors.text.default};
    margin-right: 1rem;
  }

  grid-column: 1 / 3;
  padding: 1rem;
`;
