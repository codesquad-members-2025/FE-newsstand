import React, { FC, useState, useEffect } from "react"; // 리액트 및 타입 정의 import
import styled from "@emotion/styled"; // styled-components or emotion 사용 시 (선택)

const HeaderDate: FC = () => {
  const [formattedDate, setFormattedDate] = useState<string>("");

  const daysOfWeek = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const date = String(today.getDate()).padStart(2, "0");
    const weekday = daysOfWeek[today.getDay()];

    setFormattedDate(`${year}. ${month}. ${date} ${weekday}`);
  }, []);

  return (
    <Container>
      <p>{formattedDate}</p>
    </Container>
  );
};

export default HeaderDate;

// 아래는 Emotion styled 예시 (선택)
const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0rem;
  font-size: 1rem;
  font-weight: bold;
  font-weight: 500;
`;
