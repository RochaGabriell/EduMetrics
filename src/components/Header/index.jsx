import hamburger from '../../assets/hamburger.svg'
import Dropdown from '../Dropdown'
import { HeaderWrapper, BamburgerBox, Button } from './style'

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


const Header = ( props ) => {

  const options = ['Editar Pefil', 'Confingurações', 'Sair']
  const defaultText = {
    name: 'Estevão Ferreira',
    urlProfile: 'https://avatars.githubusercontent.com/u/60045348?v=4'
  }

  // const notify = () => toast("Formulário Enviado");

  return (
    <>
      <HeaderWrapper>
        <BamburgerBox>
          <Button onClick={props.handleVisMenu}>
            <img src={hamburger} alt="hamburger" />
          </Button>
        </BamburgerBox>
        {/* <ToastContainer /> */}
        <Dropdown
          options={options}
          defaultText={defaultText}
        />
      </HeaderWrapper>
    </>
  )
}

export default Header