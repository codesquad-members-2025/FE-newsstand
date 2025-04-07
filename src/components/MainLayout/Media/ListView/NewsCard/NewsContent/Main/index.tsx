import styled from '@emotion/styled'
import Thumbnail from './Thumbnail'
import Title from './Title'

import { mainNewsType } from '../..'

function Main({ mainNews }: { mainNews: mainNewsType }) {
  return (
    <Container>
      <Thumbnail imageUrl={mainNews.imageUrl} />
      <Title title={mainNews.title} url={mainNews.url} />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 320px;
`

export default Main
