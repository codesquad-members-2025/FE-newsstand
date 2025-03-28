import styled from '@emotion/styled'

function TabButton() {
  return (
    <Container>
      <AllPress>전체 언론사</AllPress>
      <SubscribedPress>
        내가 구독한 언론사
        <Count>5</Count>
      </SubscribedPress>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
`

const AllPress = styled.button`
  font-weight: 700;
  font-size: 16px;
  color: rgba(20, 33, 43, 1);
`

const SubscribedPress = styled.button`
  font-weight: 500;
  font-size: 16px;
  color: rgba(135, 146, 152, 1);
  display: flex;
  align-items: center;
  gap: 4px;
`

const Count = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 8px;
  background-color: rgba(120, 144, 231, 1);
  font-weight: 500;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 0.7);
`

export default TabButton
