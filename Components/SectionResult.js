import React from 'react'
import styled from 'styled-components'

const SectionResultComponent = styled.div`
  margin: 0.25em;
  padding: 0.25em 0.5em;
`

const SectionResult = ({ children }) => {
  return <SectionResultComponent>{children}</SectionResultComponent>
}

export default SectionResult
