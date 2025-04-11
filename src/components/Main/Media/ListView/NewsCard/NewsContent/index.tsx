import styled from '@emotion/styled'
import Main from './Main'
import Sub from './Sub'

import { mainNewsType, subNewsListType } from '..'

interface NewsAreaProps {
  mainNews: mainNewsType
  subNewsList: subNewsListType[]
}

function NewsArea({ mainNews, subNewsList }: NewsAreaProps) {
  return (
    <Container>
      <Main mainNews={mainNews} />
      <Sub subNewsList={subNewsList} />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  gap: 32px;
`

export default NewsArea
