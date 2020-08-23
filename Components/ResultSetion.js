import React, { useMemo } from 'react'
import styled from 'styled-components'

const Section = styled.div`
  margin: 8px auto;
  width: 100%;
`

const Lable = styled.label`
  font-size: 1.5em;
  font-weight: 700;
`

const ResultSection = styled.div`
  border: 1px solid black;
  min-height: 200px;
  margin: 8px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
function ResultSetion({ result }) {
  const { isRender, value, list, target } = result

  // isRender: true,
  // isLoading: false,
  // value: [{ value: 1, equalTarget: true }],
  // list: [1, 2, 3],
  // target: 1

  const listStr = useMemo(() => {
    const listLength = list.length
    if (listLength <= 0) {
      return ''
    } else {
      return list.reduce((acc, l, index) => {
        return acc + ` ${l} ${index !== listLength - 1 ? ',' : ''}`
      }, '')
    }
  }, [list])

  const valueJsx = useMemo(() => {
    return value.map((v, index) => {
      const newKey = `result_${index}_xo`
      const { value: currentValue, equalTarget } = v
      return (
        <p key={newKey}>{`Round : ${index + 1} ====> ${target} ${
          !equalTarget ? '!=' : '='
        } ${currentValue} ${equalTarget ? 'found!!!' : ''}`}</p>
      )
    })
  }, [value])

  return (
    <Section style={{ padding: 8, flex: 1 }}>
      <Lable>ผลลัพธ์</Lable>
      <ResultSection>
        {isRender && (
          <>
            <p>{`List : [${listStr}]`}</p>
            <p>{`Search : ${target}`}</p>
            {valueJsx}
            {/* <p>{`Result ::::`}</p>
            <p>{`Round : 1 ====> 4 != 9`}</p>
            <p>{`Round : 2 ====> 4 = 4 found!!!`}</p> */}
          </>
        )}
      </ResultSection>
    </Section>
  )
}

export default ResultSetion
