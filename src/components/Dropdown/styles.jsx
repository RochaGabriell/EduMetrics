import styled from 'styled-components'

const ProfileBox = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  gap: 6px;
  cursor: pointer;
  border-radius: 10px;

  &:hover {
    background-color: #f5f5f5;
  }
`

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`

const ProfileName = styled.p`
  font-weight: bold;
`

const ProfileHi = styled.p`
  font-weight: 400;
`

const Dropdownwrapper = styled.div`
  display: ${props => (
    props.$state ? 'block' : 'none'
  )};
  width: 200px;
  position: absolute;
  background-color: #f5f5f5;
  padding: 8px;
  top: 65px;
  right: 28px;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`

export { ProfileBox, ProfileHi, ProfileImage, ProfileName, Dropdownwrapper }