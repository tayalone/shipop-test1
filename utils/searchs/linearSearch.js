const linearSearch = (list, target) => {
  const result = []
  for (let i = 0; i < list.length; i++) {
    const currentValue = list[i]
    const equalTarget = currentValue === target
    const currentResult = { value: currentValue, equalTarget }
    result.push(currentResult)
    if (equalTarget) {
      break
    }
  }
  return result
}

export default linearSearch
