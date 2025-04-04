/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { useState } from 'react';

import FieldTab from './FieldTab';
import MainNewsItem from './MainNewsItem';
import PressInfo from './PressInfo';
import SubNewsList from './SubNewsList';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
`;

const PressNews = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 24px;

  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-top: none;
`;

const News = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
`;

const RightNewsColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

const EditedByPress = styled.div`
  width: 100%;
  align-self: flex-end;
  ${({ theme }) => theme.typography.m14}
  color: ${({ theme }) => theme.colors.text.weak};
`;

const ListView = ({ data: pressList }) => {
  const [category, setCategory] = useState('generalEconomy');
  const [currentIndex, setCurrentIndex] = useState(0);

  const { logoLight, regDate, materials, name } =
    pressList[category][currentIndex];

  const mainNews = materials[0];
  const subNewsList = materials.slice(1);
  const pressListLength = pressList[category].length;

  return (
    <Container>
      <FieldTab
        category={category}
        setCategory={setCategory}
        pressLength={pressListLength}
        currentIndex={currentIndex}
      />
      <PressNews>
        <PressInfo logoUrl={logoLight} editedTime={regDate} />
        <News>
          <MainNewsItem mainNews={mainNews} />
          <RightNewsColumn>
            <SubNewsList subNewsList={subNewsList} />
            <EditedByPress>
              {name} 언론사에서 직접 편집한 뉴스입니다.
            </EditedByPress>
          </RightNewsColumn>
        </News>
      </PressNews>
    </Container>
  );
};

export default ListView;
