import styled from '@emotion/styled'
import RightButtonIcon from '@/assets/RightButtonIcon.svg?react'

interface NextPageBtnProps {
  totalPages: number
  currentPage: number
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}

function NextPageBtn({ totalPages, currentPage, setCurrentPage }: NextPageBtnProps) {
  const handleNextPage = () => {
    setCurrentPage(prev => (prev < totalPages ? prev + 1 : prev))
  }

  const isLastPage = currentPage === totalPages

  return (
    <Button isHidden={isLastPage} onClick={handleNextPage}>
      <RightButtonIcon />
    </Button>
  )
}

interface ButtonProps {
  isHidden: boolean
}

const Button = styled.button<ButtonProps>`
  display: ${({ isHidden }) => (isHidden ? 'none' : 'block')};
  position: absolute;
  right: -73px;
  top: 174px;
`

export default NextPageBtn
