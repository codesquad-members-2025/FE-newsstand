function extendArray<T>(arr: T[], targetLength: number, fillValue: T): T[] {
  if (arr.length >= targetLength) {
    return arr
  }

  const additionalLength = targetLength - arr.length
  const additionalArray = Array(additionalLength).fill(fillValue)

  return arr.concat(additionalArray)
}

export default extendArray
