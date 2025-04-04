import styled from '@emotion/styled'

interface BrandMarkProps {
  imageUrl: string
  alt: string
}

function BrandMark({ imageUrl, alt }: BrandMarkProps) {
  return <Img src={imageUrl} alt={alt}></Img>
}

const Img = styled.img`
  height: 20px;
  width: auto;
  object-fit: contain;
`

export default BrandMark
