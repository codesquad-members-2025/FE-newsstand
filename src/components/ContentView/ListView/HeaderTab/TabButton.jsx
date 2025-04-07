import styled from "styled-components";

const StyledButton = styled.button`
  all: unset;
  box-sizing: border-box;
  cursor: pointer;
  padding: 0.72rem 1rem;
  color: ${({ $curCategory, theme, $dataCategory }) =>
    $curCategory === $dataCategory ? theme.text.whiteDefault : theme.text.weak};
  background-color: ${({ $curCategory, theme, $dataCategory }) =>
    $curCategory === $dataCategory
      ? theme.surface.brandAlt
      : theme.surface.alt};
  font-size: 0.88rem;
  width: ${({ $curCategory, $dataCategory }) =>
    $curCategory === $dataCategory ? "10.38rem" : null};
`;
const CategoryWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`;

const Category = styled.div``;
const NewsPage = styled.div`
  display: flex;
  gap: 0.13rem;
`;
const CurrentPage = styled.div``;
const Slash = styled.div`
  color: ${({ theme }) => theme.text.whiteWeak};
`;
const MaxPage = styled.div`
  color: ${({ theme }) => theme.text.whiteWeak};
`;

export default function TabButton({
  children,
  dataCategory,
  moveCategory,
  curCategory,
  page,
  maxPage,
}) {
  return (
    <StyledButton
      $curCategory={curCategory}
      $dataCategory={dataCategory}
      data-category={dataCategory}
      onClick={(e) => moveCategory(e.currentTarget.dataset.category)}
    >
      <CategoryWrapper>
        <Category>{children}</Category>
        {curCategory === children ? (
          <NewsPage>
            <CurrentPage>{page + 1}</CurrentPage>
            <Slash>/</Slash>
            <MaxPage>{maxPage}</MaxPage>
          </NewsPage>
        ) : null}
      </CategoryWrapper>
    </StyledButton>
  );
}
