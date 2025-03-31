import styled from '@emotion/styled'
import PressScroll from './PressScroll'
import PressNews from './PressNews'

function ListView() {
  return (
    <Container>
      <PressScroll />
      <PressNews />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
`

export default ListView
