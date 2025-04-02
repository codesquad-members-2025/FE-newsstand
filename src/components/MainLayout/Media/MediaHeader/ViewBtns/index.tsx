import styled from '@emotion/styled'
import { ViewType } from '../../index'
import ViewBtn from './ViewBtn'

interface ViewBtnProps {
  currentView: ViewType
  setCurrentView: (view: ViewType) => void
}

function ViewBtns({ currentView, setCurrentView }: ViewBtnProps) {
  return (
    <Container>
      <ViewBtn type="list" currentView={currentView} setCurrentView={setCurrentView} />
      <ViewBtn type="grid" currentView={currentView} setCurrentView={setCurrentView} />
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
