import React from 'react'
import styled from 'styled-components'

const SectionListInput = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex: 1;
  width: 100%;
  padding: 4px;
`

const LabelDiv = styled.div`
  text-align: center;
`

const Lable = styled.label`
  font-size: 1.5em;
  font-weight: 700;
`

const InputGroup = styled.div`
  margin: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  flex: 2;
`

const Select = styled.select`
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 40%;
  flex: 1;
`

const ErrorSpan = styled.span`
  color: red;
  margin: 8px 8px;
`

function ListSelect({ handlerOnChage, valuObj, label, name }) {
  const { value, isError, errorMessage } = valuObj

  return (
    <SectionListInput>
      <LabelDiv>
        <Lable>{label}</Lable>
      </LabelDiv>
      <InputGroup>
        <div
          style={{
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Select name={name} value={value} onChange={handlerOnChage}>
            <option value="LINEAR_SEARCH">1. Linear Search</option>
            <option value="BINARY_SEARCH">2. Binary Search</option>
            <option value="BUBBULE_SEARCH">3. Bubble Search</option>
          </Select>
          {isError && <ErrorSpan> {errorMessage}</ErrorSpan>}
        </div>
      </InputGroup>
    </SectionListInput>
  )
}

export default ListSelect
