import styled from '@emotion/styled'

import TabBtns from './TabBtns'
import ViewBtns from './ViewBtns'

import { ViewType } from '../index'

interface MediaHeaderProps {
  currentView: ViewType
  onViewChange: (view: ViewType) => void
}

function MediaHeader({ currentView, onViewChange }: MediaHeaderProps) {
  return (
    <Container>
      <TabBtns />
      <ViewBtns onViewChange={onViewChange} currentView={currentView} />
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
