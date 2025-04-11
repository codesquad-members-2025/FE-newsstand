import styled from '@emotion/styled'
import ProgressBtn from './ProgressBtn'
import TextBtn from './TextBtn'

interface HeaderProps {
  categories: string[]
  headerIndex: number
  setHeaderIndex: React.Dispatch<React.SetStateAction<number>>
  pageIndex: number
  setPageIndex: React.Dispatch<React.SetStateAction<number>>
  totalPageCount: number
}

export interface ProgressBtnProps {
  text: string
  currentIndex: number
  totalCount: number
}

export interface TextBtnProps {
  text: string
}

function Header({
  categories,
  headerIndex,
  setHeaderIndex,
  pageIndex,
  setPageIndex,
  totalPageCount,
}: HeaderProps) {
  const getBtn = (category: string, index: number) => {
    return index === headerIndex ? (
      <ProgressBtn
        key={index}
        text={category}
        pageIndex={pageIndex}
        totalPageCount={totalPageCount}
      />
    ) : (
      <TextBtn
        key={index}
        text={category}
        setHeaderIndex={setHeaderIndex}
        setPageIndex={setPageIndex}
        index={index}
      />
    )
  }

  const headerBtns = categories.reduce((btns, category, index): any => {
    return [...btns, getBtn(category, index)]
  }, [])

  return <Container>{headerBtns}</Container>
}

const Container = styled.div`
  display: flex;
  width: 930px;
  height: 40px;
  border: 1px solid rgba(210, 218, 224, 1);
  background-color: rgba(245, 247, 249, 1);
`

export default Header
