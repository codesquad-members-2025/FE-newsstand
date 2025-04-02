import styled from '@emotion/styled'

import TabBtns from './TabBtns'
import ViewBtns from './ViewBtns'

import { ViewType } from '../index'

interface MediaHeaderProps {
  currentView: ViewType
  setCurrentView: (view: ViewType) => void
}

function MediaHeader({ currentView, setCurrentView }: MediaHeaderProps) {
  return (
    <Container>
      <TabBtns />
      <ViewBtns setCurrentView={setCurrentView} currentView={currentView} />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 24px;
`

export default MediaHeader
