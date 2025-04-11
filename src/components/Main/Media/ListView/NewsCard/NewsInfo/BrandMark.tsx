import styled from '@emotion/styled'

interface BrandMarkProps {
  imageUrl: string
}

function BrandMark({ imageUrl }: BrandMarkProps) {
  return <Img src={imageUrl} alt="언론사 로고"></Img>
}

const Img = styled.img`
  height: 20px;
  width: auto;
  object-fit: contain;
`

export default BrandMark
