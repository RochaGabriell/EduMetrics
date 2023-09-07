import { styled } from "styled-components"

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: ${props => props.$visMenu ? '250px auto' : '0 auto'};
  min-height: 100vh;
`

const ContainerRoot = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 64px auto 64px;
`

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  padding: 20px;
`

export { ContentWrapper, ContainerRoot, Container }