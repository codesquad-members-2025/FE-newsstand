import styled from "styled-components";

const StyledButton = styled.button`
  all: unset;
  cursor: pointer;
  padding: 0.72rem 1rem;
  color: ${({ $curCategory, theme, $dataCategory }) =>
    $curCategory === $dataCategory ? theme.text.whiteDefault : theme.text.weak};
  background-color: ${({ $curCategory, theme, $dataCategory }) =>
    $curCategory === $dataCategory
      ? theme.surface.brandAlt
      : theme.surface.alt};
  font-size: 0.88rem;
`;

export default function TabButton({
  children,
  dataCategory,
  moveCategory,
  curCategory,
}) {
  return (
    <StyledButton
      $curCategory={curCategory}
      $dataCategory={dataCategory}
      data-category={dataCategory}
      onClick={(e) => moveCategory(e.currentTarget.dataset.category)}
    >
      {children}
    </StyledButton>
  );
}
