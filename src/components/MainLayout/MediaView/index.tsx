import styled from '@emotion/styled'
import TabAndViewer from './TabAndViewer'
import GridView from './GridView'

function MediaView() {
  return (
    <Container>
      <TabAndViewer />
      <GridView />
    </Container>
  )
}

const Container = styled.div`
  width: 930px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: space-between;
`

export default MediaView
