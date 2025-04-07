import styled from '@emotion/styled'

interface TitleProps {
  text: string
  url: string
}

function Title({ text, url }: TitleProps) {
  return (
    <Link href={url}>
      <Text>{text}</Text>
    </Link>
  )
}

const Text = styled.span`
  font-family: Pretendard Variable;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0%;
  color: rgba(75, 89, 102, 1);
`

const Link = styled.a`
  text-decoration: none;
`

export default Title
