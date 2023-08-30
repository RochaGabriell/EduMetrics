import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.div`
  background-color: #caff4e;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const TextBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  color: #000;
  font-size: 1.0rem;
`

const Text = styled.p`
  font-weight: bold;
`

const LinkText = styled.a`
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  
  &:hover {
    color: #fff;
  }
`

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <TextBox>
          <p>IFPI - Instituto Federal do Piauí - Campus Corrente</p>
        </TextBox>
        <TextBox>
          <p>Design and Developed by <LinkText href='https://github.com/RochaGabriell'>RochaGabriell</LinkText></p>
        </TextBox>
      </FooterWrapper>
    </>
  )
}

export default Footer