import styled from '@emotion/styled'
import Header from '@/components/Main/Header'
import AutoRollingBar from '@/components/Main/AutoRollingBar'
import Media from '@/components/Main/Media'
import SubscriptionProvider from '@/contexts/SubscriptionContext'

function Main() {
  return (
    <Container>
      <Header />
      <AutoRollingBar />
      <SubscriptionProvider>
        <Media />
      </SubscriptionProvider>
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

export default Main
