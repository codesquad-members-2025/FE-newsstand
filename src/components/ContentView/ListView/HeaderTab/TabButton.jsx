import styled from "styled-components";

const StyledButton = styled.button`
  all: unset;
  cursor: pointer;
  padding: 0.72rem 1rem;
  color: ${({ theme }) => theme.text.weak};
  background-color: ${({ theme }) => theme.surface.alt};
  font-size: 0.88rem;
`;

export default function TabButton({ children, dataCategory, moveCategory }) {
  return (
    <StyledButton
      data-category={dataCategory}
      onClick={(e) => moveCategory(e.currentTarget.dataset.category)}
    >
      {children}
    </StyledButton>
  );
}
