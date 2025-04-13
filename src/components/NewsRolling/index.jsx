import styled from '@emotion/styled';
import { useState, useEffect, useMemo } from 'react';

import chunkArray from '@/utils/chunkArray';

import RollingItem from './RollingItem';

const NewsRollingContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export default function NewsRolling() {
  const [rollingNewsData, setRollingNewsData] = useState([]);

  const chunkedData = useMemo(() => {
    return chunkArray(rollingNewsData, 5);
  }, [rollingNewsData]);

  useEffect(() => {
    fetch('http://localhost:5173/news/rolling')
      .then((res) => res.json())
      .then(setRollingNewsData)
      .catch((err) => console.error('rollingNewsData fetch error:', err));
  }, []);

  return (
    <NewsRollingContainer>
      {chunkedData.map((chunk, index) => (
        <RollingItem key={index} data={chunk} />
      ))}
    </NewsRollingContainer>
  );
}
