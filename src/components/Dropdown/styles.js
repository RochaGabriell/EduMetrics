import styled from 'styled-components'

const ProfileBox = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  gap: 6px;
  cursor: pointer;
  border-radius: 10px 10px 0 0;
  width: 220px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
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
  display: ${props => props.$state ? 'block' : 'none'};
  width: 220px;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 8px;
  top: 66px;
  right: 20px;
  border-radius: 0 0 10px 10px;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    text-align: center;
    padding: 8px;
    border-radius: 8px;
  }

  li:hover {
    background-color: ${({ theme }) => theme.colors.hover};
  }
`

export { ProfileBox, ProfileHi, ProfileImage, ProfileName, Dropdownwrapper }