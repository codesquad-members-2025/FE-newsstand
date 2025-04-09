import { useContext } from 'react'
import styled from '@emotion/styled'
import BrandMark from './BrandMark'
import EditDate from './EditDate'
import SubscriptionBtn from '@/components/Common/SubscriptionBtn'

import { MediaContext } from '@/contexts/MediaContext'
import { newsInfoType } from '..'

interface NewsInfoProps {
  newsInfo: newsInfoType
}

function NewsInfo({ newsInfo }: NewsInfoProps) {
  const { subscribedPressMap, handlePressSubscription } = useContext(MediaContext)
  const pressId = newsInfo.pid

  const imageUrl = newsInfo.logoLight
  const editDate = newsInfo.regDate

  return (
    <Container>
      <BrandMark imageUrl={imageUrl} />
      <EditDate editDate={editDate} />
      <SubscriptionBtn
        isSubscribed={subscribedPressMap.has(pressId)}
        onClick={() => handlePressSubscription(pressId, !subscribedPressMap.has(pressId))}
        isWhiteBackground={false}
      />
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
