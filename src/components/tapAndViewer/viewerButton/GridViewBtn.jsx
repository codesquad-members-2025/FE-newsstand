import styled from "styled-components";

const StyledButton = styled.button`
  all: unset;
  cursor: pointer;
  padding: 0.19rem;
`;

const StyledSvg = styled.svg`
  fill: ${({ theme, $listView }) =>
    $listView ? theme.text.weak : theme.text.point};
`;

export default function GridViewBtn({ listView, showGridView }) {
  return (
    <StyledButton onClick={showGridView}>
      <StyledSvg
        $listView={listView}
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 8V0H8V8H0ZM0 18V10H8V18H0ZM10 8V0H18V8H10ZM10 18V10H18V18H10ZM2 6H6V2H2V6ZM12 6H16V2H12V6ZM12 16H16V12H12V16ZM2 16H6V12H2V16Z" />
      </StyledSvg>
    </StyledButton>
  );
}
