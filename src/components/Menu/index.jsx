import { useState, useEffect } from 'react'

import logo from '../../assets/genetic-data.svg'
import dashboard from '../../assets/dashboard.svg'
import home from '../../assets/home-icon.svg'
import form from '../../assets/form-icon.svg'
import about from '../../assets/about-icon.svg'
import contact from '../../assets/contact-icon.svg'

import { MenuWrapper, MenuItem, MenuLogo, MenuList, MenuListItem, MenuListItemLink, DarkModeToggle } from './styles'

const Menu = (props) => {

  const [isChecked, setIsChecked] = useState(false)

  useEffect(() => {
    const storageValue = localStorage.getItem('theme')

    if (JSON.parse(storageValue) === 'dark') {
      setIsChecked(true)
    }
    else {
      setIsChecked(false)
    }
  }, [])

  const handleDarkModeToggle = () => {
    setIsChecked(!isChecked)
  }

  return (
    <>
      <MenuWrapper $visMenu={props.visMenu}>
        <MenuItem>

          <MenuLogo>
            <img src={logo} alt="Logo" />
            <p>IFPI - Campus Corrente</p>
            <DarkModeToggle
                  onChange={() => {
                    props.toggleTheme()
                    handleDarkModeToggle()
                  }}
                  checked={isChecked}
                />
          </MenuLogo>

          <MenuList>
            <MenuListItem>
              <MenuListItemLink to="/dashboard">
                <img src={dashboard} alt="Dashboard" />
                Dashboard
              </MenuListItemLink>
            </MenuListItem>
            <p>Páginas</p>
            <MenuListItem>
              <MenuListItemLink to="/">
                <img src={home} alt="Home" />
                Home
              </MenuListItemLink>
            </MenuListItem>
            <MenuListItem>
              <MenuListItemLink to="/form">
                <img src={form} alt="Form" />
                Formulário
              </MenuListItemLink>
            </MenuListItem>
            <MenuListItem>
              <MenuListItemLink to="/contact">
                <img src={contact} alt="Contact" />
                Contatos
              </MenuListItemLink>
            </MenuListItem>
            <MenuListItem>
              <MenuListItemLink to="/about">
                <img src={about} alt="About" />
                Sobre
              </MenuListItemLink>
            </MenuListItem>
          </MenuList>

        </MenuItem>
      </MenuWrapper>
    </>
  )
}

export default Menu