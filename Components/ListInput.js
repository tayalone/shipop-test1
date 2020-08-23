import React from 'react'
import styled from 'styled-components'

const SectionListInput = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  width: 100%;
  padding: 4px;
`

const LabelDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8px;
  width: 50px;
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

const Input = styled.input`
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  flex: 1;
  text-align: center;
`
const ErrorSpan = styled.span`
  color: red;
  margin: 8px 8px;
`

export default function ListInput({
  handlerOnChage,
  valuObj,
  type,
  label,
  name
}) {
  const { value, isError, errorMessage } = valuObj
  return (
    <SectionListInput>
      <LabelDiv>
        <Lable>{label}</Lable>
      </LabelDiv>
      <InputGroup>
        <div style={{ display: 'flex', flex: 1 }}>
          <Input
            type={type}
            name={name}
            onChange={handlerOnChage}
            value={value}
          />
        </div>
        {isError && <ErrorSpan> {errorMessage}</ErrorSpan>}
      </InputGroup>
    </SectionListInput>
  )
}
