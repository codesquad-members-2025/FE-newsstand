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

const StyledSVG = styled.svg`
  path {
    fill: ${({ theme }) => theme.text.whiteDefault}; // ✅ 테마 토큰으로 설정
  }
`;

export default function TabButton({
  children,
  dataCategory,
  moveCategory,
  curCategory,
  page,
  maxPage,
  swipeNextPage,
  isAllpress,
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
              {isAllpress ? (
                <>
                  <CurrentPage>{page + 1}</CurrentPage>
                  <Slash>/</Slash>
                  <MaxPage>{maxPage}</MaxPage>
                </>
              ) : (
                <StyledSVG
                  width="5"
                  height="8"
                  viewBox="0 0 5 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1.48317 7.5L0.666504 6.68333L3.34984 4L0.666504 1.31667L1.48317 0.5L4.98317 4L1.48317 7.5Z" />
                </StyledSVG>
              )}
            </NewsPage>
          ) : null}
        </CategoryTextWrapper>
      </CategoryWrapper>
    </StyledButton>
  );
}
