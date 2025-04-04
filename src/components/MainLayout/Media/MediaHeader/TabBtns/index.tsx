import styled from '@emotion/styled'
import Badge from '@/components/Common/Badge'
import { TabType } from '../..'
import { act } from 'react'

interface TabBtnsProps {
  currentTab: string
  setCurrentTab: (view: TabType) => void
  count: number
}

function TabBtns({ currentTab, setCurrentTab, count }: TabBtnsProps) {
  return (
    <Container>
      <TabButton onClick={() => setCurrentTab('allPress')} active={currentTab === 'allPress'}>
        전체 언론사
      </TabButton>
      <TabButton onClick={() => setCurrentTab('subPress')} active={currentTab === 'subPress'}>
        내가 구독한 언론사
        <Badge count={count} />
      </TabButton>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
`

interface BtnActiveProps {
  active: boolean
}

const TabButton = styled.button<BtnActiveProps>`
  font-weight: ${({ active }) => (active ? '700' : '500')};
  font-size: 16px;
  color: ${({ active }) => (active ? 'rgba(20, 33, 43, 1)' : 'rgba(135, 146, 152, 1)')};
  display: flex;
  align-items: center;
  gap: 4px;
`

export default TabBtns
