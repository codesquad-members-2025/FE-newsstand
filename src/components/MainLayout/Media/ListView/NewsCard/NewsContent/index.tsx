import styled from '@emotion/styled'
import Main from './Main'
import Sub from './Sub'

function NewsArea() {
  return (
    <Container>
      <Main />
      <Sub />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  gap: 32px;
`

export default NewsArea
