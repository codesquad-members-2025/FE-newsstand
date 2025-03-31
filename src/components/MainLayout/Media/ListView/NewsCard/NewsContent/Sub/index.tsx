import styled from '@emotion/styled'
import Title from './Title'
import Caption from './Caption'

function Sub() {
  const titleText = '"위스키 사려고 이틀 전부터 줄 섰어요"'
  const captionText = '서울경제 언론사에서 직접 편집한 뉴스입니다.'

  return (
    <Container>
      <Title text={titleText}></Title>
      <Title text={titleText}></Title>
      <Title text={titleText}></Title>
      <Title text={titleText}></Title>
      <Title text={titleText}></Title>
      <Title text={titleText}></Title>
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
