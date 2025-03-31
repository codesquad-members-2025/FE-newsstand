import styled from '@emotion/styled'

function TodaysDate() {
  return <Date>{getFormattedDate()}</Date>
}

function getFormattedDate(): string {
  const date: globalThis.Date = new globalThis.Date()

  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const weekdays = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']
  const weekday = weekdays[date.getDay()]

  return `${year}. ${month}. ${day}. ${weekday}`
}

const Date = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: rgba(95, 110, 118, 1);
`

export default TodaysDate
