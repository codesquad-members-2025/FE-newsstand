import styled from '@emotion/styled'

function Grid() {
  return (
    <Container>
      <img
        src="https://s.pstatic.net/static/newsstand/up/2021/0824/nsd115034872.png"
        height="20"
        alt="중앙일보"
      ></img>
    </Container>
  )
}

const Container = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Grid
