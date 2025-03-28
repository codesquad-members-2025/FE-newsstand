import styled from '@emotion/styled'
import TabButton from './TabBtns'
import ViewerButton from './ViewerBtns'
import { ViewType } from '../index'

interface TabAndViewerProps {
  currentView: ViewType
  onViewChange: (view: ViewType) => void
}

function TabAndViewer({ currentView, onViewChange }: TabAndViewerProps) {
  return (
    <Container>
      <TabButton />
      <ViewerButton onViewChange={onViewChange} currentView={currentView} />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 24px;
`

export default TabAndViewer
