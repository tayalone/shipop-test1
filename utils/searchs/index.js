import linearSearch from './linearSearch'
import binarySearch from './binarySearch'

const index = (type, list, target) => {
  const searcher = type === 'LINEAR_SEARCH' ? linearSearch : binarySearch
  const result = searcher(list, target)
  return result
}

export default index
