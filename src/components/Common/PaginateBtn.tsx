import styled from '@emotion/styled'
import LeftButtonIcon from '@/assets/LeftButtonIcon.svg?react'

interface PrevPageBtnProps {
  onClick: () => void
  disabled: boolean
}

function PrevPageBtn({ onClick, disabled }: PrevPageBtnProps) {
  return (
    <Button onClick={onClick} disabled={disabled}>
      <LeftButtonIcon />
    </Button>
  )
}

const Button = styled('button')<{ disabled: boolean }>`
  display: ${({ disabled }) => (disabled ? 'none' : 'block')};
  position: absolute;
  left: -73px;
  top: 174px;
`

export default PrevPageBtn
