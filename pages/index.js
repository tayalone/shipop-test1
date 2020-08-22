import React, { useState } from 'react'
import styled from 'styled-components'
import searchs from '../utils/searchs'

import Lable from '../Components/Label'
import SectionResult from '../Components/SectionResult'

const Button = styled.button`
  font-weight: 700;
  font-size: 0.75em;
  width: 7em;
  height: 2.25em;
  color: white;
  background-color: ${(props) => (props.disabled ? 'lightgray' : 'gold')};
  margin: 0.25em;
  padding: 0.25em 0.25em;
  border: 0;
  border-radius: 3px;
`

const Body = styled.div`
  border-radius: 5px;
  width: 100vw;
  height: 100vh;
  padding: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Container = styled.div`
  width: 600px;
  font-size: 1em;
  margin: 1em;
  padding: 1em;
  border: 2px solid black;
  border-radius: 5px;
`

const HeroHeadLine = styled.h1`
  font-size: 2em;
  font-weight: 700;
  margin: 0.25em;
  padding: 0.25em 0.5em;
  /* margin: 0.25em 0.5em;
  padding: 0.25em 5em; */
`

const SectionInput = styled.div`
  margin: 0.25em;
  padding: 0.25em 0.5em;
  display: flex;
  flex-direction: row;
`

const ResultDiv = styled.div`
  margin: 1em 0;
  padding: 0.5em;
  border: 1px solid black;
  border-radius: 5px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const LabelDiv = styled.div`
  margin: 0.25em;
  padding: 0.25em 0.5em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1;
  max-width: 25px;
`

const LabeSelectlDiv = styled(LabelDiv)`
  max-width: 1000px;
`

const InputDiv = styled.div`
  margin: 0.25em;
  padding: 0.25em 0.5em;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex: 2;
`

const SectionSelect = styled.div`
  margin: 0.25em;
  padding: 0.25em 0.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Input = styled.input`
  font-size: 1.15em;
  padding: 12px 20px;
  margin: 8px 8px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  text-align: center;
`
const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Select = styled.select`
  font-size: 1.15em;
  padding: 12px 20px;
  margin: 8px 8px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: ${(props) => (props.fullWidth ? '100%' : '40%')};
`

const checkInputPattern = /^([0]|[-]*[1-9][0-9]*)+(,\s*([0]|[-]*[1-9][0-9]*)+)*$/

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
  const [result, setResult] = useState([
    { value: 1, equalTarget: false },
    { value: 2, equalTarget: true }
  ])

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

  console.log(`result`, result)
  return (
    <Body>
      <Container>
        {/* <div>
          <h1>Debug</h1>
          <div>List: {list}</div>
          <div>Currentlist Valid: {String(listValid)}</div>
          <div>Search Target: {seachTarget}</div>
          <div>Search Type: {searchType}</div>
          <div>Result: {JSON.stringify(result)}</div>
        </div> */}
        <HeroHeadLine> Shippop Test 1 - Find Number in List </HeroHeadLine>
        <SectionInput>
          <LabelDiv>
            <Lable>List</Lable>
          </LabelDiv>
          <InputDiv>
            <InputGroup fullWidth>
              <Input
                type="text"
                name="list"
                onChange={handlerOnChangedList}
                value={list}
              />
            </InputGroup>
            <span>sss</span>
          </InputDiv>
        </SectionInput>
        <SectionInput>
          <LabelDiv>
            <Lable>ค้นหา</Lable>
          </LabelDiv>

          <InputDiv>
            <Input
              type="number"
              onChange={handlerOnChangedSearchTarget}
              value={seachTarget}
            />

            <Button
              disabled={isDisableSubmitBtn}
              onClick={handlerOnClickSubmitBtn}
            >
              ค้นหา
            </Button>
          </InputDiv>
        </SectionInput>
        <SectionSelect>
          <LabeSelectlDiv>
            <Lable>ประเภทการค้นหา</Lable>
          </LabeSelectlDiv>

          <Select value={searchType} onChange={handlerOnChangeSearchType}>
            <option value="LINEAR_SEARCH">1. Linear Search</option>
            <option value="BINARY_SEARCH">2. Binary Search</option>
            <option value="BUBBULE_SEARCH">3. Bubble Search</option>
          </Select>
        </SectionSelect>
        <SectionResult>
          <Lable>Result</Lable>
          <ResultDiv>
            <p>{`List: [1,2,3,4,5,6,7,8,9,10]`}</p>
            <p>{`Search: 4`}</p>
            <p>Result :::</p>
            <p> {`Round : 1 ===> 4 != 9`}</p>
            <p> {`Round : 2 ===> 4 = 4 found!!`}</p>
          </ResultDiv>
        </SectionResult>
      </Container>
    </Body>
  )
}

export default index
