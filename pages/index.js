import React, { useState, useMemo } from 'react'

import styled from 'styled-components'

import searchs from '../utils/searchs'
import delay from '../utils/delay'
import ListInput from '../Components/ListInput'
import ListSelect from '../Components/ListSelect'
import Spinner from '../Components/Spinner'

import ResultSetion from '../Components/ResultSetion'

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
const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.disabled ? 'lightgrey' : 'gold')};
  color: white;
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  border: 0;
`

const checkInputPattern = /^([0]|[-]*[1-9][0-9]*)+(\s*,\s*([0]|[-]*[1-9][0-9]*)+)*$/

const checkRealNumberPattern = /^[0]|[-]*[1-9][0-9]*$/

const convertStringToArrayOfString = (str) => {
  const removeSpace = str.replace(/\s/g, '')
  const splitComma = removeSpace.split(',')
  const numberArr = splitComma.map((n) => parseInt(n))
  return numberArr
}

function index() {
  const [list, setList] = useState({
    value: '',
    isError: true,
    errorMessage: ''
  })
  const [seachTarget, setSearchTarget] = useState({
    value: 0,
    isError: false,
    errorMessage: ''
  })
  const [searchType, setSearchType] = useState({
    value: 'LINEAR_SEARCH',
    isError: false,
    errorMessage: ''
  })
  const [result, setResult] = useState({
    isRender: false,
    isLoading: false,
    value: [],
    list: [],
    target: ''
  })

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
  }

  const handlerOnChangedSearchTarget = (e) => {
    const newSeachTarget = e.target.value

    const regex = RegExp(checkRealNumberPattern, 'g')

    const isErrorEmpty = newSeachTarget ? false : true
    const isValidPattern = regex.test(newSeachTarget)

    setSearchTarget({
      ...seachTarget,
      value: parseInt(newSeachTarget),
      isError: isErrorEmpty || !isValidPattern,
      errorMessage: isErrorEmpty
        ? 'กรุณาใส่ข้อมูลตัวเลข'
        : !isValidPattern
        ? 'กรุณาใส่ข้อมูลตัวเลขจำนวนเต็ม'
        : ''
    })
  }

  const handlerOnChangeSearchType = (e) => {
    const newSearchType = e.target.value

    const isSelctUnseenSearchType = newSearchType === 'BUBBULE_SEARCH'

    setSearchType({
      ...searchType,
      value: newSearchType,
      isError: isSelctUnseenSearchType,
      errorMessage: isSelctUnseenSearchType
        ? 'Bubel Search ยังไม่ถูกคิดค้นบนโลก :)'
        : ''
    })
  }

  const handlerOnClickSubmitBtn = async () => {
    setResult({
      ...result,
      isRender: false,
      isLoading: true,
      value: [],
      list: [],
      target: ''
    })
    await delay(250)

    const listInt = convertStringToArrayOfString(list.value)

    const newResults = searchs(searchType.value, listInt, seachTarget.value)

    await delay(1000)
    setResult({
      ...result,
      isRender: true,
      value: newResults,
      list: listInt,
      target: seachTarget.value,
      isLoading: false
    })

    // setResult(newResults)
  }

  const isDisableSubmitBtn = useMemo(() => {
    return (
      list.isError ||
      seachTarget.isError ||
      searchType.isError ||
      result.isLoading
    )
  }, [list.isError, seachTarget.isError, searchType.isError, result.isLoading])

  console.log(result)
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
        <ListInput
          handlerOnChage={handlerOnChangedList}
          valuObj={list}
          type={'text'}
          label={'List'}
          name={'list_number'}
        />
        <ListInput
          handlerOnChage={handlerOnChangedSearchTarget}
          valuObj={seachTarget}
          type={'number'}
          label={'ค้นหา'}
          name={'search_number'}
        />
        <ListSelect
          handlerOnChage={handlerOnChangeSearchType}
          valuObj={searchType}
          label={'ประเภทการค้นหา'}
          name={'search_type'}
        />
        <div style={{ margin: '8px auto' }}>
          {result.isLoading ? (
            <Spinner />
          ) : (
            <Button
              disabled={isDisableSubmitBtn}
              onClick={handlerOnClickSubmitBtn}
            >
              ค้นหา
            </Button>
          )}
        </div>

        <ResultSetion result={result} />
      </Container>
    </Body>
  )
}

export default index
