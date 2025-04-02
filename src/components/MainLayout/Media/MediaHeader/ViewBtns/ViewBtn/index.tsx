import styled from '@emotion/styled'
import { ViewType } from '../../../index'
import GridViewIcon from '@/assets/GridViewIcon.svg?react'
import ListViewIcon from '@/assets/ListViewIcon.svg?react'

interface ViewerButtonProps {
  type: 'list' | 'grid'
  currentView: ViewType
  setCurrentView: (view: ViewType) => void
}

function ViewBtn({ type, currentView, setCurrentView }: ViewerButtonProps) {
  return (
    <Button active={currentView === type} onClick={() => setCurrentView(type)}>
      {type === 'grid' ? <GridViewIcon /> : <ListViewIcon />}
    </Button>
  )
}

const Button = styled.button<{ active: boolean }>`
  display: flex;

  & svg path {
    fill: ${({ active }) => (active ? '#4362D0' : '#879298')};
  }
`

export default ViewBtn
