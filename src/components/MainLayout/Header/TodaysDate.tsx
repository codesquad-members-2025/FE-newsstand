import styled from '@emotion/styled'

function TodaysDate() {
  const date = '2025. 3. 27 목요일'

  return <Date>{date}</Date>
}

const Date = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: rgba(95, 110, 118, 1);
`

export default TodaysDate
