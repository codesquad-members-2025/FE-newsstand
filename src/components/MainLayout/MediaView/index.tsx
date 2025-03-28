import { useState } from 'react'
import styled from '@emotion/styled'
import TabAndViewer from './TabAndViewer'
import GridView from './GridView'
import ListView from './ListView'

export type ViewType = 'grid' | 'list'

function MediaView() {
  const [currentView, setCurrentView] = useState<ViewType>('grid')

  return (
    <Container>
      <TabAndViewer onViewChange={setCurrentView} currentView={currentView} />
      {currentView === 'grid' ? <GridView /> : <ListView />}
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
