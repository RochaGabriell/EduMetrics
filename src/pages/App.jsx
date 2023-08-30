import { Outlet } from "react-router-dom"
import styled from "styled-components"

import Menu from "../components/Menu"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Container from "../components/Container"

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 260px auto;
  min-height: 100vh;
`

const ContainerRoot = styled.div`
  display: grid;
  grid-template-rows: 64px auto 64px;
`

function App() {

  return (
    <ContentWrapper>
      <Menu />
      <ContainerRoot>
        <Header />
        <Container>
          <Outlet />
        </Container>
        <Footer />
      </ContainerRoot>
    </ContentWrapper>
  )
}

export default App
