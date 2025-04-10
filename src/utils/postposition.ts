function getProperPostposition(word: string, type: '을를' = '을를'): string {
  const lastChar = word[word.length - 1]
  const code = lastChar.charCodeAt(0)
  const hasFinalConsonant = (code - 44032) % 28 !== 0

  if (type === '을를') {
    return hasFinalConsonant ? '을' : '를'
  }

  return ''
}

export { getProperPostposition }
