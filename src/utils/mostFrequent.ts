export type FrequencyTemp = {
  [key: string]: number
}

export function getMostFrequent(arr: string[]) {
  const hashmap = arr.reduce((acc: FrequencyTemp, val) => {
    acc[val] = (acc[val] || 0) + 1
    return acc
  }, {})
  return Object.keys(hashmap).reduce((a, b) =>
    hashmap[a] > hashmap[b] ? a : b
  )
}
