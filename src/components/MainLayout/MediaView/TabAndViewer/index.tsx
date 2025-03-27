import styled from '@emotion/styled'
import TabButton from './TabButton'
import ViewerButton from './ViewerButton'

function TabPanel() {
  return (
    <Container>
      <TabButton />
      <ViewerButton />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 24px;
`

export default TabPanel
