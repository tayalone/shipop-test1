import React from 'react'
import styled from 'styled-components'

const LableComponent = styled.label`
  font-size: 1.5em;
  font-weight: 700;
`

const Label = ({ children }) => {
  return <LableComponent>{children}</LableComponent>
}

export default Label
