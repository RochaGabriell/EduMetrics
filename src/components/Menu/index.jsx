import logo from '../../assets/genetic-data.svg'
import dashboard from '../../assets/dashboard.svg'
import home from '../../assets/home-icon.svg'
import form from '../../assets/form-icon.svg'
import about from '../../assets/about-icon.svg'
import contact from '../../assets/contact-icon.svg'

import { MenuWrapper, MenuItem, MenuLogo, MenuList, MenuListItem, MenuListItemLink, DarkModeToggle } from './styles'

const Menu = (props) => {
  return (
    <>
      <MenuWrapper>
        <MenuItem>

          <MenuLogo>
            <img src={logo} alt="Logo" />
            <p>IFPI - Campus Corrente</p>
            {props.visMenu ?
              <DarkModeToggle onChange={props.changerTheme} /> :
              null
            }
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