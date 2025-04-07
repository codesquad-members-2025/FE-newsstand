import styled from '@emotion/styled'

interface TitleProps {
  title: string
  url: string
}

function Title({ title, url }: TitleProps) {
  return (
    <Link href={url}>
      <Text>{title}</Text>
    </Link>
  )
}

const Text = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: rgba(20, 33, 43, 1);
`

const Link = styled.a`
  text-decoration: none;
`

export default Title
