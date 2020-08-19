import linearSearch from './linearSearch'
import binarySearch from './binarySearch'

const index = (type, list) => {
  const searcher = type === 'LINEAR_SEARCH' ? linearSearch : binarySearch
  const result = searcher(list)
  return result
}

export default index
