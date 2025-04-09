import styled from "styled-components";
import ProgressBar from "./ProgressBar";

const StyledButton = styled.button`
  all: unset;
  position: relative;
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

const CategoryTextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 2;
`;

export default function TabButton({
  children,
  dataCategory,
  moveCategory,
  curCategory,
  page,
  maxPage,
  swipeNextPage,
}) {
  return (
    <StyledButton
      $curCategory={curCategory}
      $dataCategory={dataCategory}
      data-category={dataCategory}
      onClick={(e) => moveCategory(e.currentTarget.dataset.category)}
    >
      {curCategory === dataCategory && (
        <ProgressBar
          swipeNextPage={swipeNextPage}
          page={page}
          curCategory={curCategory}
        />
      )}

      <CategoryWrapper>
        <CategoryTextWrapper>
          <Category>{children}</Category>
          {curCategory === children ? (
            <NewsPage>
              <CurrentPage>{page + 1}</CurrentPage>
              <Slash>/</Slash>
              <MaxPage>{maxPage}</MaxPage>
            </NewsPage>
          ) : null}
        </CategoryTextWrapper>
      </CategoryWrapper>
    </StyledButton>
  );
}
