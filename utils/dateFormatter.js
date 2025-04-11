/**
 * 날짜 형식을 'YYYYMMDD HH:MM:SS'에서 'YYYY.MM.DD. HH:MM' 형식으로 변환합니다.
 * @param {string} dateString - 'YYYYMMDD HH:MM:SS' 형식의 날짜 문자열 (예: '20250326 17:00:08')
 * @returns {string} 'YYYY.MM.DD. HH:MM' 형식의 날짜 문자열 (예: '2025.03.26. 17:00')
 */
function formatDate(dateString) {
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

/**
 * 날짜 형식을 'YYYY.MM.DD. HH:MM' 형식에서 'YYYYMMDD HH:MM:SS' 형식으로 변환합니다.
 * @param {string} dateString - 'YYYY.MM.DD. HH:MM' 형식의 날짜 문자열 (예: '2025.03.26. 17:00')
 * @returns {string} 'YYYYMMDD HH:MM:SS' 형식의 날짜 문자열 (예: '20250326 17:00:00')
 */
function reverseFormatDate(dateString) {
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

module.exports = {
  formatDate,
  reverseFormatDate,
}
