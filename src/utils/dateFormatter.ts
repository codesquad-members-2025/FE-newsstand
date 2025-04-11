function formatDate(dateString: string) {
  // 입력값이 없거나 유효하지 않은 경우 빈 문자열 반환
  if (!dateString || typeof dateString !== 'string') {
    return ''
  }

  // 정규식을 사용하여 입력 형식 검증 및 그룹화
  const regex = /^(\d{4})(\d{2})(\d{2})\s+(\d{2}):(\d{2}):\d{2}$/
  const match = dateString.match(regex)

  if (!match) {
    return dateString // 형식이 맞지 않으면 원본 반환
  }

  // 매칭된 그룹을 사용하여 새 형식으로 변환
  const [_, year, month, day, hour, minute] = match
  return `${year}.${month}.${day}. ${hour}:${minute}`
}

function reverseFormatDate(dateString: string) {
  // 입력값이 없거나 유효하지 않은 경우 빈 문자열 반환
  if (!dateString || typeof dateString !== 'string') {
    return ''
  }

  // 정규식을 사용하여 입력 형식 검증 및 그룹화
  const regex = /^(\d{4})\.(\d{2})\.(\d{2})\.\s+(\d{2}):(\d{2})$/
  const match = dateString.match(regex)

  if (!match) {
    return dateString // 형식이 맞지 않으면 원본 반환
  }

  // 매칭된 그룹을 사용하여 새 형식으로 변환
  const [_, year, month, day, hour, minute] = match
  return `${year}${month}${day} ${hour}:${minute}:00`
}
export { formatDate, reverseFormatDate }
