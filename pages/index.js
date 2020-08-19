import React, { useState } from 'react'
import searchs from '../utils/searchs'

const checkInputPattern = /^\d+(,\s*\d+)*$/

const convertStringToArrayOfString = (str) => {
  const removeSpace = str.replace(/\s/g, '')
  const splitComma = removeSpace.split(',')
  const numberArr = splitComma.map((n) => parseInt(n))
  return numberArr
}

function index() {
  const [list, setList] = useState('')
  const [listValid, setListValid] = useState(false)
  const [seachTarget, setSearchTarget] = useState('')
  const [searchType, setSearchType] = useState('LINEAR_SEARCH')
  const [result, setResult] = useState([])

  const handlerOnChangedList = (e) => {
    const newList = e.target.value

    const regex = RegExp(checkInputPattern, 'g')
    const currentListValid = regex.test(newList)

    setList(newList)
    setListValid(currentListValid)
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
    // alert('click submit')
    console.log(`handlerOnClickSubmitBtn`)
    console.log('list', list)
    console.log('seachTarget', seachTarget)
    const listInt = convertStringToArrayOfString(list)
    console.log('listInt', listInt)

    // const testList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const newResults = searchs(searchType, listInt, parseInt(seachTarget))
    setResult(newResults)
  }

  const isDisableSubmitBtn = !listValid

  return (
    <div>
      Welcome to Next.js!!!
      <div>
        <h1>Debug</h1>
        <div>List: {list}</div>
        <div>Currentlist Valid: {String(listValid)}</div>
        <div>Search Target: {seachTarget}</div>
        <div>Search Type: {searchType}</div>
        <div>Result: {JSON.stringify(result)}</div>
      </div>
      <div>
        <label>List</label>
        <input
          type="text"
          name="list"
          onChange={handlerOnChangedList}
          value={list}
        />
      </div>
      <div>
        <label>ค้นหา</label>
        <input
          type="number"
          onChange={handlerOnChangedSearchTarget}
          value={seachTarget}
        />
        <button disabled={isDisableSubmitBtn} onClick={handlerOnClickSubmitBtn}>
          ค้นหา
        </button>
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
