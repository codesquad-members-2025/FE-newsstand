import styled from '@emotion/styled'
import Header from '@/components/MainLayout/Header'
import Roller from '@/components/MainLayout/Roller'
import MediaView from '@/components/MainLayout/MediaView'

function MainLayout() {
  return (
    <Container>
      <Header />
      <Roller />
      <MediaView />
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
