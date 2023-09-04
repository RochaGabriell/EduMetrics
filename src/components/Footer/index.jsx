import React from 'react'
import {FooterWrapper, TextBox, LinkText} from './style'

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