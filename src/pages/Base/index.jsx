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
  const [visMenu, setVisMenu] = useState(window.innerWidth <= 768 ? false : true)

  function handleToggleTheme() {
    setTheme((prevState) => prevState === 'dark' ? 'ligth' : 'dark')
  }

  function handleVisMenu() {
    setVisMenu((prevState) => !prevState)
  }

  return (
    <ThemeProvider theme={themes[theme]}>
      <ContentWrapper>
        <Menu toggleTheme={handleToggleTheme} visMenu={visMenu} />
        <ContainerRoot $visMenu={visMenu}>
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