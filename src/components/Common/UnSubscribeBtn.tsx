import styled from '@emotion/styled'
import CloseIcon from '@/assets/CloseIcon.svg?react'

interface UnSubscribeBtnProps {
  onClick: () => void
}

function UnSubscribeBtn({ onClick }: UnSubscribeBtnProps) {
  return (
    <Button onClick={onClick}>
      <CloseIcon />
    </Button>
  )
}

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border: 1px solid rgba(210, 218, 224, 1);
  border-radius: 100%;
  padding: 0px 6px;
  background-color: rgba(255, 255, 255, 1);
`

export default UnSubscribeBtn
