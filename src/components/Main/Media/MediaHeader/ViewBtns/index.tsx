import styled from '@emotion/styled'
import { ViewType } from '../../index'
import ViewBtn from './ViewBtn'

interface ViewBtnProps {
  viewType: ViewType
  setViewType: (view: ViewType) => void
}

function ViewBtns({ viewType, setViewType }: ViewBtnProps) {
  return (
    <Container>
      <ViewBtn type="list" viewType={viewType} setViewType={setViewType} />
      <ViewBtn type="grid" viewType={viewType} setViewType={setViewType} />
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
