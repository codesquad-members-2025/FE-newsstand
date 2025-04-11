import styled from '@emotion/styled'
import BrandMark from './BrandMark'
import EditDate from './EditDate'
import SubscriptionBtn from '@/components/Common/SubscriptionBtn'
import { newsInfoType } from '..'

interface NewsInfoProps {
  newsInfo: newsInfoType
}

function NewsInfo({ newsInfo }: NewsInfoProps) {
  const pressId = newsInfo.pid

  const imageUrl = newsInfo.logoLight
  const editDate = newsInfo.regDate

  return (
    <Container>
      <BrandMark imageUrl={imageUrl} />
      <EditDate editDate={editDate} />
      <SubscriptionBtn pressId={pressId} isWhiteBackground={false} />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`

export default NewsInfo
