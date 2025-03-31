import styled from '@emotion/styled'
import Header from '@/components/MainLayout/Header'
import AutoRollingBar from '@/components/MainLayout/AutoRollingBar'
import Media from '@/components/MainLayout/Media'

function MainLayout() {
  return (
    <Container>
      <Header />
      <AutoRollingBar />
      <Media />
    </Container>
  )
}

const Container = styled.div`
  width: fit-content;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 50px 0px 0px;
`

export default MainLayout
