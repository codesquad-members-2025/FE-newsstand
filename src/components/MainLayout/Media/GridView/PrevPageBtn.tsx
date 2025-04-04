import styled from '@emotion/styled'
import LeftButtonIcon from '@/assets/LeftButtonIcon.svg?react'

interface PrevPageBtnProps {
  currentPage: number
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}

function PrevPageBtn({ currentPage, setCurrentPage }: PrevPageBtnProps) {
  const handlePrevPage = () => {
    setCurrentPage(prev => (prev > 1 ? prev - 1 : prev))
  }

  const isFirstPage = currentPage === 1

  return (
    <Button isHidden={isFirstPage} onClick={handlePrevPage}>
      <LeftButtonIcon />
    </Button>
  )
}

interface ButtonProps {
  isHidden: boolean
}

const Button = styled.button<ButtonProps>`
  display: ${({ isHidden }) => (isHidden ? 'none' : 'flex')};
  position: absolute;
  left: -73px;
  top: 174px;
`

export default PrevPageBtn
