import styled from '@emotion/styled'
import BrandMark from './BrandMark'
import EditDate from './EditDate'
import SubscribeBtn from '@/components/Common/SubscribeBtn'
import UnSubscribeBtn from '@/components/Common/UnSubscribeBtn'

import { newsInfoType } from '..'

interface NewsInfoProps {
  newsInfo: newsInfoType
}

function NewsInfo({ newsInfo }: NewsInfoProps) {
  const imageUrl = newsInfo.logoLight
  const editDate = newsInfo.regDate
  const isSubscribed = false

  return (
    <Container>
      <BrandMark imageUrl={imageUrl} />
      <EditDate editDate={editDate} />
      {isSubscribed ? (
        <UnSubscribeBtn />
      ) : (
        <SubscribeBtn backgroundColor="rgba(245, 247, 249, 1)" />
      )}
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
