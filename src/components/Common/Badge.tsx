import styled from '@emotion/styled'

interface BadgeProps {
  count: number
}

function Badge({ count }: BadgeProps) {
  return <Container>{count}</Container>
}

const Container = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 8px;
  background-color: rgba(120, 144, 231, 1);
  font-weight: 500;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 0.7);
`

export default Badge
