import styled from '@emotion/styled'
import { ViewType } from '../../index'
import ViewBtn from './ViewBtn'

interface ViewBtnProps {
  currentView: ViewType
  onViewChange: (view: ViewType) => void
}

function ViewBtns({ currentView, onViewChange }: ViewBtnProps) {
  return (
    <Container>
      <ViewBtn type="list" currentView={currentView} onViewChange={onViewChange} />
      <ViewBtn type="grid" currentView={currentView} onViewChange={onViewChange} />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
`

export default ViewBtns
