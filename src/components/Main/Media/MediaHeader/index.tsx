import styled from '@emotion/styled'

import TabBtns from './TabBtns'
import ViewBtns from './ViewBtns'

import { ViewType } from '../index'
import { TabType } from '../index'

interface MediaHeaderProps {
  viewType: ViewType
  setViewType: (view: ViewType) => void
  tabType: TabType
  setTabType: (view: TabType) => void
  count: number
}

function MediaHeader({ viewType, setViewType, tabType, setTabType, count }: MediaHeaderProps) {
  return (
    <Container>
      <TabBtns tabType={tabType} setTabType={setTabType} count={count} />
      <ViewBtns setViewType={setViewType} viewType={viewType} />
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
