import styled from '@emotion/styled'

import TabBtns from './TabBtns'
import ViewBtns from './ViewBtns'

import { ViewType } from '../index'
import { TabType } from '../index'

interface MediaHeaderProps {
  currentView: ViewType
  setCurrentView: (view: ViewType) => void
  currentTab: TabType
  setCurrentTab: (view: TabType) => void
  count: number
}

function MediaHeader({
  currentView,
  setCurrentView,
  currentTab,
  setCurrentTab,
  count,
}: MediaHeaderProps) {
  return (
    <Container>
      <TabBtns currentTab={currentTab} setCurrentTab={setCurrentTab} count={count} />
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
