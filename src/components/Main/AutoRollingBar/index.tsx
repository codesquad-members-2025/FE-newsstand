import styled from '@emotion/styled'
import NewsBar from './NewsBar'

function AutoRollingBar() {
  return (
    <Container>
      <NewsBar />
      <NewsBar />
    </Container>
  )
}

const Container = styled.div`
  width: 930px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
`

export default AutoRollingBar
