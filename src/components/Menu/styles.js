import styled from 'styled-components'
import { Link } from 'react-router-dom'

const MenuWrapper = styled.div`
  display: ${props => props.$visMenu ? 'block' : 'none'};
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 250px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.secondary};
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
    color: ${({ theme }) => theme.colors.text};
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
    color: ${({ theme }) => theme.colors.text};
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

const MenuListItemLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 10px 4px;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  transition: 0.3s;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
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

export {MenuWrapper, MenuItem, MenuLogo, MenuList, MenuListItem, MenuListItemLink, DarkModeToggle}