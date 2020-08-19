import React, { useState } from 'react'

function index() {
  const [list, setList] = useState('')
  const [seachTarget, setSearchTarget] = useState('')
  const [searchType, setSearchType] = useState('LINEAR_SEARCH')
  const [result, setResult] = useState([])

  const handlerOnChangedList = (e) => {
    const newList = e.target.value
    setList(newList)
  }

  const handlerOnChangedSearchTarget = (e) => {
    const newSeachTarget = e.target.value
    setSearchTarget(newSeachTarget)
  }

  const handlerOnChangeSearchType = (e) => {
    const newSearchType = e.target.value
    setSearchType(newSearchType)
  }

  const handlerOnClickSubmitBtn = () => {
    alert('click submit')
  }

  return (
    <div>
      Welcome to Next.js!!!
      <div>
        <h1>Debug</h1>
        <div>List: {list}</div>
        <div>Search Target: {seachTarget}</div>
        <div>Search Type: {searchType}</div>
        <div>Result: {JSON.stringify(result)}</div>
      </div>
      <div>
        <label>List</label>
        <input onChange={handlerOnChangedList} />
      </div>
      <div>
        <label>ค้นหา</label>
        <input onChange={handlerOnChangedSearchTarget} />
        <button onClick={handlerOnClickSubmitBtn}> ค้นหา </button>
      </div>
      <div>
        <label>ประเภทการค้นหา</label>
        <select value={searchType} onChange={handlerOnChangeSearchType}>
          <option value="LINEAR_SEARCH">1. Linear Search</option>
          <option value="BINARY_SEARCH">2. Binary Search</option>
          <option value="BUBBULE_SEARCH">3. Bubble Search</option>
        </select>
      </div>
      <div>
        <label>Result</label>
        <div></div>
      </div>
    </div>
  )
}

export default index
