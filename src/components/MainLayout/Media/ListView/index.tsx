import styled from '@emotion/styled'
import Header from './Header'
import NewsCard from './NewsCard'

function ListView() {
  return (
    <Container>
      <Header />
      <NewsCard />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
`

export default ListView
