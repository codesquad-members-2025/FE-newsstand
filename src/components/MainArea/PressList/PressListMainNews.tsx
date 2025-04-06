import React, { FC } from "react"; // 리액트 및 타입 정의 import
import styled from "@emotion/styled"; // styled-components or emotion 사용 시 (선택)

// interface MyComponentProps {
//   // 컴포넌트에 필요한 props 타입을 정의
//   mainNews?: {
//     id: number;
//     newsTitle: string;
//     thumbnailImage: string;
//     link: string;
//     date: Date;
//   };
// }

// const PressListMainNews: FC<MyComponentProps> = ({ mainNews }) => {
//   const { newsTitle, thumbnailImage, link } = mainNews;
//   return (
//     <Container>
//       <div className="main-news-thumbnail">
//         <img src={thumbnailImage} alt={newsTitle} />
//       </div>
//       <div className="main-news-title">
//         <a href={link}>{newsTitle}</a>
//       </div>
//     </Container>
//   );
// };

const PressListMainNews: FC = () => {
  return (
    <Container>
      <div className="main-news-thumbnail">
        <img src="" alt="" />
      </div>
      <div className="main-news-title">
        <a href="">메인 기사</a>
      </div>
    </Container>
  );
};

export default PressListMainNews;

// 아래는 Emotion styled 예시 (선택)
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;
