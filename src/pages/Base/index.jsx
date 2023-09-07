import { useState } from "react"
import { Outlet } from "react-router-dom"
import { ThemeProvider } from "styled-components"

import Menu from "../../components/Menu"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import themes from '../../styles/themes/index'

import usePersistedState from "../../hooks/usePersistedState"

import { ContentWrapper, ContainerRoot, Container } from "./styles"

function App() {

  const [theme, setTheme] = usePersistedState('theme', 'ligth')
  const [visMenu, setVisMenu] = useState(true)

  function handleToggleTheme() {
    setTheme((prevState) => prevState === 'dark' ? 'ligth' : 'dark')
  }

  function handleVisMenu() {
    setVisMenu((prevState) => !prevState)
  }

  return (
    <ThemeProvider theme={themes[theme]}>
      <ContentWrapper $visMenu={visMenu}>
        <Menu toggleTheme={handleToggleTheme} visMenu={visMenu} />
        <ContainerRoot>
          <Header handleVisMenu={handleVisMenu} />
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