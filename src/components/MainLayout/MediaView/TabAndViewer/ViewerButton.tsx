import styled from '@emotion/styled'

function ViewerButton() {
  return (
    <Container>
      <ListViewBtn>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M19 5V19H5V5H19ZM20.1 3H3.9C3.4 3 3 3.4 3 3.9V20.1C3 20.5 3.4 21 3.9 21H20.1C20.5 21 21 20.5 21 20.1V3.9C21 3.4 20.5 3 20.1 3ZM11 7H17V9H11V7ZM11 11H17V13H11V11ZM11 15H17V17H11V15ZM7 7H9V9H7V7ZM7 11H9V13H7V11ZM7 15H9V17H7V15Z"
            fill="#879298"
          />
        </svg>
      </ListViewBtn>
      <GridViewBtn>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M3 11V3H11V11H3ZM3 21V13H11V21H3ZM13 11V3H21V11H13ZM13 21V13H21V21H13ZM5 9H9V5H5V9ZM15 9H19V5H15V9ZM15 19H19V15H15V19ZM5 19H9V15H5V19Z"
            fill="#4362D0"
          />
        </svg>
      </GridViewBtn>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
`

const ListViewBtn = styled.button`
  display: flex;
`

const GridViewBtn = styled.button`
  display: flex;
`

export default ViewerButton
