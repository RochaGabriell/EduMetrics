import styled from 'styled-components'

import hamburger from '../../assets/hamburger.svg'
import Dropdown from '../Dropdown'

const HeaderWrapper = styled.div`
  background-color: #caff4e;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  padding: 8px 20px;
`

const BamburgerBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const Button = styled.button`
  background-color: transparent;
  border: none;
  width: 40px;
  height: 40px;
  padding: 8px;
  cursor: pointer;

  img {
    width: 24px;
  }

  &:hover {
    background-color: #f5f5f5;
    border-radius: 50%;
  }
`

const Header = () => {

  const options = ['Editar Pefil', 'Confingurações', 'Sair']
  const defaultText = {
    name: 'Estevão Ferreira',
    urlProfile: 'https://avatars.githubusercontent.com/u/60045348?v=4'
  }

  return (
    <>
      <HeaderWrapper>
        <BamburgerBox>
          <Button>
            <img src={hamburger} alt="hamburger" />
          </Button>
        </BamburgerBox>
        <Dropdown
          options={options}
          defaultText={defaultText}
        />
      </HeaderWrapper>
    </>
  )
}

export default Header