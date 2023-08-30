import React from 'react'
import styled from 'styled-components'

import logo from '../../assets/genetic-data.svg'
import dashboard from '../../assets/dashboard.svg'
import home from '../../assets/home-icon.svg'
import form from '../../assets/form-icon.svg'
import about from '../../assets/about-icon.svg'
import contact from '../../assets/contact-icon.svg'

const MenuWrapper = styled.div`
  position: block;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(to bottom, #051937, #003f62, #00676e, #008c58, #84a92f);
`

const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
`

const MenuLogo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  img {
    width: 35px;
  }

  p {
    margin-left: 10px;
    color: #fff;
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
  }
`

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  padding: 0px 16px;

  p {
    color: #ffffffd4;
    font-size: 0.8rem;
    font-weight: 500;
    text-transform: uppercase;
    margin: 15px 4px;
  }
`

const MenuListItem = styled.li`
  margin: 0;
  padding: 0;
`

const MenuListItemLink = styled.a`
  display: flex;
  align-items: center;
  padding: 10px 4px;
  color: #fff;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  transition: 0.3s;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  img {
    width: 20px;
    margin-right: 10px;
  }
`

const DarkModeToggle = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  width: 40px;
  height: 20px;
  background-color: #fff;
  border-radius: 20px;
  position: relative;
  outline: none;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: #000;
    transition: 0.3s;
  }

  &:checked {
    background-color: #000;
    &:before {
      background-color: #fff;
      left: calc(100% - 2px);
      transform: translateX(-100%);
    }
  }
`

const Menu = () => {
  return (
    <>
      <MenuWrapper>
        <MenuItem>

          <MenuLogo>
            <img src={logo} alt="Logo" />
            <p>IFPI - Campus Corrente</p>
            <DarkModeToggle />
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
              <MenuListItemLink to="/home">
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