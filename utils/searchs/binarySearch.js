import bubbleSort from '../sorts/bubbleSort'
const binarySearch = (list, target) => {
  const result = []
  const sortList = bubbleSort(list)

  let startIndex = 0
  let endIndex = sortList.length - 1

  while (startIndex <= endIndex) {
    let midIndex = Math.floor((start + end) / 2)

    const currentValue = sortList[midIndex]
    const equalTarget = currentValue === target

    const currentResult = { value: currentValue, equalTarget }
    result.push(currentResult)
    if (equalTarget) {
      break
    } else {
      if (currentValue < target) startIndex = midIndex + 1
      else endIndex = midIndex - 1
    }
  }

  return result
}

export default binarySearch
