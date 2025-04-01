import styled from '@emotion/styled'
import BrandMark from './BrandMark'
import EditDate from './EditDate'
import SubscribeBtn from './SubscribeBtn'
import UnSubscribeBtn from './UnSubscribeBtn'

export interface BrandMarkProps {
  imageUrl: string
  alt: string
}

export interface EditDateProps {
  editDate: string
}

export interface SubscribeBtn {
  isSubscribed: boolean
}

function NewsInfo() {
  const imageUrl = 'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/277.png'
  const alt = '언론사 로고'
  const editDate = '2023.02.10. 18:53 편집'
  const isSubscribed = false

  return (
    <Container>
      <BrandMark imageUrl={imageUrl} alt={alt} />
      <EditDate editDate={editDate} />
      {isSubscribed ? <UnSubscribeBtn /> : <SubscribeBtn />}
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
