import styled from '@emotion/styled';
import RollingItem from './RollingItem';

const NewsRollingContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export default function NewsRolling() {
  return (
    <NewsRollingContainer>
      <RollingItem />
      <RollingItem />
    </NewsRollingContainer>
  );
}
