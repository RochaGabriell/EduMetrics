import { Outlet } from "react-router-dom"
import { styled, ThemeProvider } from "styled-components"

import Menu from "../components/Menu"
import Header from "../components/Header"
import Footer from "../components/Footer"
import themes from '../styles/themes/index'
import { useState } from "react"

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 260px auto;
  min-height: 100vh;
`

const ContainerRoot = styled.div`
  display: grid;
  grid-template-rows: 64px auto 64px;
`

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  padding: 20px;
`

function App() {

  const [theme, setTheme] = useState('ligth')

  function handleChangerTheme() {
    setTheme((prevState) => prevState === 'dark' ? 'ligth' : 'dark')
  }

  return (
    <ThemeProvider theme={themes[theme]}>
      <ContentWrapper>
        <Menu changerTheme={handleChangerTheme} />
        <ContainerRoot>
          <Header />
          <Container>
            <Outlet />
          </Container>
          <Footer />
        </ContainerRoot>
      </ContentWrapper>
    </ThemeProvider>
  )
}

export default App
