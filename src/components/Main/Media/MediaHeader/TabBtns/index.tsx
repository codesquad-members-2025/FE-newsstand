import styled from '@emotion/styled'
import Badge from '@/components/Common/Badge'
import { TabType } from '../..'

interface TabBtnsProps {
  tabType: string
  setTabType: (view: TabType) => void
  count: number
}

function TabBtns({ tabType, setTabType, count }: TabBtnsProps) {
  return (
    <Container>
      <TabButton onClick={() => setTabType('all')} active={tabType === 'all'}>
        전체 언론사
      </TabButton>
      <TabButton onClick={() => setTabType('subscribed')} active={tabType === 'subscribed'}>
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
