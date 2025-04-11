import styled from '@emotion/styled'
import Title from './Title'
import Caption from './Caption'

import { subNewsListType } from '../..'

function Sub({ subNewsList }: { subNewsList: subNewsListType[] }) {
  const captionText = '서울경제 언론사에서 직접 편집한 뉴스입니다.'

  const titleComponents = subNewsList.map((newsCardData, index) => {
    return <Title key={index} text={newsCardData.title} url={newsCardData.url} />
  })

  return (
    <Container>
      {titleComponents}
      <Caption text={captionText}></Caption>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export default Sub
