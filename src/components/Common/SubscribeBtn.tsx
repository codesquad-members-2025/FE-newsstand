import styled from '@emotion/styled'
import PlusIcon from '@/assets/PlusIcon.svg?react'

interface ButtonProps {
  bgColor: string
}

interface SubscribeBtnProps {
  onClick: () => void
  backgroundColor: string
}

function SubscribeBtn({ onClick, backgroundColor }: SubscribeBtnProps) {
  return (
    <Button onClick={onClick} bgColor={backgroundColor}>
      <PlusIcon />
      <Text>구독하기</Text>
    </Button>
  )
}

const Button = styled.button<ButtonProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 24px;
  gap: 2px;
  border: 1px solid rgba(210, 218, 224, 1);
  border-radius: 999px;
  padding: 0px 6px;
  background-color: ${({ bgColor }) => bgColor};
`

const Text = styled.span`
  font-weight: 500;
  font-size: 12px;
  color: rgba(135, 146, 152, 1);
`

export default SubscribeBtn
