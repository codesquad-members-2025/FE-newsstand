import styled from '@emotion/styled'
import RightButtonIcon from '@/assets/RightButtonIcon.svg?react'

interface NextPageBtnProps {
  onClick: () => void
  disabled: boolean
}

function NextPageBtn({ onClick, disabled }: NextPageBtnProps) {
  return (
    <Button onClick={onClick} disabled={disabled}>
      <RightButtonIcon />
    </Button>
  )
}

const Button = styled('button')<{ disabled: boolean }>`
  display: ${({ disabled }) => (disabled ? 'none' : 'block')};
  position: absolute;
  right: -73px;
  top: 174px;
`

export default NextPageBtn
