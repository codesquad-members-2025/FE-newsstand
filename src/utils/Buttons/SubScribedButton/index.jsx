import styled from "styled-components";

const StyledButton = styled.button`
  all: unset;
  cursor: pointer;
  padding: 0.31rem 0.38rem;
  display: flex;
  align-content: center;
  width: ${({ width }) => width}rem;
  gap: 0.25rem;
  color: ${({ theme }) => theme.text.weak};
  fill: ${({ theme }) => theme.text.weak};
  background-color: ${({ theme }) => theme.surface.alt};
  border: 1px solid ${({ theme }) => theme.border.default};
  border-radius: ${({ width }) => width / 2}rem;
  font-weight: 500;

  &:hover {
    color: ${({ theme }) => theme.text.bold};
    fill: ${({ theme }) => theme.text.bold};
    background-color: ${({ theme }) => theme.surface.default};
    border: 1px solid ${({ theme }) => theme.border.bold};
  }
`;

export default function SubScribedButton({ children }) {
  return (
    <StyledButton>
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M14 7.99799H8V13.998H6V7.99799H0V5.99799H6V-0.00201416H8V5.99799H14V7.99799Z" />
      </svg>
      {children}
    </StyledButton>
  );
}
