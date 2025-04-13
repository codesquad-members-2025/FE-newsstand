/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

import FieldTab from './components/FieldTab';
import MainNewsItem from './components/MainNewsItem';
import PressInfo from './components/PressInfo';
import SubNewsList from './components/SubNewsList';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 388px;
  border: 1px solid ${({ theme }) => theme.colors.border.default};
`;

const PressNews = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 24px;
  border-top: 1px solid ${({ theme }) => theme.colors.border.default};
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

const ListView = ({
  data: pressData,
  currentCategory,
  setCurrentCategory,
  currentPage,
  totalPressCount,
  reset,
  progress,
}) => {
  const { logoLight, regDate, materials, name } = pressData;

  const mainNews = materials[0];
  const subNewsList = materials.slice(1);

  function handleCategory(key) {
    reset();
    setCurrentCategory(key);
  }

  return (
    <Container>
      <FieldTab
        currentCategory={currentCategory}
        handleCategory={handleCategory}
        totalPressCount={totalPressCount}
        currentPressIndex={currentPage}
        progress={progress}
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
