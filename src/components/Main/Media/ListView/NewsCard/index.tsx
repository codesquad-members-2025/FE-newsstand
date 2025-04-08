import styled from '@emotion/styled'
import NewsInfo from './NewsInfo'
import NewsContent from './NewsContent'

export interface newsInfoType {
  pid: string
  name: string
  regDate: string
  logoDark: string
  logoLight: string
}

export interface mainNewsType {
  title: string
  url: string
  imageUrl: string
}

export interface subNewsListType {
  title: string
  url: string
}

interface listPageDataType {
  newsInfo: newsInfoType
  mainNews: mainNewsType
  subNewsList: subNewsListType[]
}

interface NewsCardProps {
  newsCardData: listPageDataType
}

function NewsCard({ newsCardData }: NewsCardProps) {
  return (
    <Container>
      <NewsInfo newsInfo={newsCardData.newsInfo} />
      <NewsContent mainNews={newsCardData.mainNews} subNewsList={newsCardData.subNewsList} />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 930px;
  height: 348px;
  gap: 16px;
  border: 1px solid rgba(210, 218, 224, 1);
  border-top: none;
  padding: 24px;
`

export default NewsCard
