import styled from '@emotion/styled'
import Title from './Title'
import TodaysDate from './TodaysDate'

function Header() {
  return (
    <Container>
      <Title />
      <TodaysDate />
    </Container>
  )
}

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 8px 0px;
`

export default Header
