import styled from '@emotion/styled'
import Grid from './Grid'

function GridView() {
  const gridItems = Array.from({ length: 24 }, (_, index) => <Grid key={index} />)

  return <Container>{gridItems}</Container>
}

const Container = styled.div`
  width: 930px;
  height: 388px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1px;
  background-color: rgba(210, 218, 224, 1);
  padding: 1px;
`

export default GridView
