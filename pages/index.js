import React, { useState } from 'react'

import styled from 'styled-components'

import searchs from '../utils/searchs'
import ListInput from '../Components/ListInput'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`
const Container = styled.div`
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 600px;
  flex-direction: column;
  border: 1px solid black;
`

const checkInputPattern = /^([0]|[-]*[1-9][0-9]*)+(\s*,\s*([0]|[-]*[1-9][0-9]*)+)*$/

const convertStringToArrayOfString = (str) => {
  const removeSpace = str.replace(/\s/g, '')
  const splitComma = removeSpace.split(',')
  const numberArr = splitComma.map((n) => parseInt(n))
  return numberArr
}

function index() {
  const [list, setList] = useState({
    value: '',
    isError: false,
    errorMessage: ''
  })
  const [listValid, setListValid] = useState(false)
  const [seachTarget, setSearchTarget] = useState('')
  const [searchType, setSearchType] = useState('LINEAR_SEARCH')
  const [result, setResult] = useState([])

  const handlerOnChangedList = (e) => {
    const newList = e.target.value

    const regex = RegExp(checkInputPattern, 'g')
    const isErrorEmpty = newList ? false : true
    const isValidPattern = regex.test(newList)

    setList({
      ...list,
      value: newList,
      isError: isErrorEmpty || !isValidPattern,
      errorMessage: isErrorEmpty
        ? 'กรุณาใส่ข้อมูล List '
        : !isValidPattern
        ? 'กรุณาใส่ข้อมูล List ตาม format ที่กำหนด 1,2,3,4,5,6,7,8,9'
        : ''
    })
    setListValid(isErrorEmpty || !isValidPattern)
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
  console.log(`list`, list)

  return (
    <Body>
      <Container>
        {/* <Title> Welcome to Next.js!!!</Title>
        <div>
          <h1>Debug</h1>
          <div>List: {list}</div>
          <div>Currentlist Valid: {String(listValid)}</div>
          <div>Search Target: {seachTarget}</div>
          <div>Search Type: {searchType}</div>
          <div>Result: {JSON.stringify(result)}</div>
        </div> */}
        <ListInput handlerOnChangedList={handlerOnChangedList} list={list} />
        {/* <div>
          <label>List</label>
          <input
            type="text"
            name="list"
            onChange={handlerOnChangedList}
            value={list}
          />
        </div> */}
        {/* <div>
          <label>ค้นหา</label>
          <input
            type="number"
            onChange={handlerOnChangedSearchTarget}
            value={seachTarget}
          />
          <button
            disabled={isDisableSubmitBtn}
            onClick={handlerOnClickSubmitBtn}
          >
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
        </div> */}
      </Container>
    </Body>
  )
}

export default index
