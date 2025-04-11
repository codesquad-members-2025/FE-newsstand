function filterArray<T, K extends keyof T>(array: T[], key: K, value: T[K]): T[] {
  return array.filter(item => item[key] === value)
}

export default filterArray
