import hamburger from '../../assets/hamburger.svg'
import Dropdown from '../Dropdown'
import {HeaderWrapper, BamburgerBox, Button} from './style'

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