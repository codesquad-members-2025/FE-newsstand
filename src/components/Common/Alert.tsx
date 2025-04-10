import { useContext } from 'react'
import styled from '@emotion/styled'
import { MediaContext } from '@/contexts/MediaContext'
import { AlertContext } from '@/contexts/AlertContext'
import { getPressNameByPressId } from '@/utils/newsTransFormater'
import { getProperPostposition } from '@/utils/postposition'

function Alert() {
  const { data, handlePressSubscription } = useContext(MediaContext)
  const { setShowAlert, pressId } = useContext(AlertContext)

  const pressName = getPressNameByPressId(data, pressId)
  const postpostion = getProperPostposition(pressName)

  const handleConfirm = () => {
    handlePressSubscription(pressId)
    setShowAlert(false)
  }
  const onClose = () => {
    setShowAlert(false)
  }

  return (
    <Container>
      <TextArea>
        <Text>{pressName}</Text>
        {postpostion}
        <br /> 구독 해지하시겠습니까?
      </TextArea>
      <ButtonWarrper>
        <Button onClick={handleConfirm}>예, 해지합니다</Button>
        <Button onClick={onClose}>아니오</Button>
      </ButtonWarrper>
    </Container>
  )
}

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  width: 320px;
  border: 1px solid rgba(210, 218, 224, 1);
  font-size: 16px;
  background-color: white;
  z-index: 100;
`

const TextArea = styled.div`
  border-bottom: 1px solid rgba(210, 218, 224, 1);
  font-weight: 500;
  padding: 24px;
  gap: 10px;
  text-align: center;
`

const Text = styled.span`
  font-weight: 700;
`

const ButtonWarrper = styled.div`
  display: flex;
  flex-direction: row;
  height: 48px;
  background-color: rgba(245, 247, 249, 1);
`

const Button = styled.button`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid rgba(210, 218, 224, 1);
  font-size: 16px;
  font-weight: 500;
  color: rgba(95, 110, 118, 1);

  &:hover {
    text-decoration: underline;
  }

  &:last-of-type {
    border-right: none;
    color: rgba(20, 33, 43, 1);
  }
`

export default Alert
