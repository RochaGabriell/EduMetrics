import React from 'react'
import styled from 'styled-components'

import hamburger from '../../assets/hamburger.svg'

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

const ProfileBox = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
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

const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <BamburgerBox>
          <Button>
            <img src={hamburger} alt="hamburger" />
          </Button>
        </BamburgerBox>
        <ProfileBox>
          <ProfileHi>Olá</ProfileHi>
          <ProfileName>Estevão Ferreira</ProfileName>
          <ProfileImage src="https://avatars.githubusercontent.com/u/39769751?v=4" alt="profile" />
        </ProfileBox>
      </HeaderWrapper>
    </>
  )
}

export default Header