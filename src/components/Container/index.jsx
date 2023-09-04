import React from 'react'
import styled from 'styled-components'

const ContainerWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  padding: 20px;
`

const Container = () => {
  return (
    <>
      <ContainerWrapper>
      </ContainerWrapper>
    </>
  )
}

export default Container