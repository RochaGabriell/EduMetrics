import styled from 'styled-components'

const FooterWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const TextBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.0rem;
`

const LinkText = styled.a`
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  color: ${({ theme }) => theme.colors.text};
`

export {FooterWrapper, TextBox, LinkText}