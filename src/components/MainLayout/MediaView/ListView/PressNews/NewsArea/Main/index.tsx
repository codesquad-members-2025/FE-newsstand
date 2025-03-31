import styled from '@emotion/styled'
import Thumbnail from './Thumbnail'
import Title from './Title'

function Main() {
  return (
    <Container>
      <Thumbnail />
      <Title />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 320px;
`

export default Main
