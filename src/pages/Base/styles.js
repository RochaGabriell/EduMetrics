import { styled } from "styled-components"

const ContentWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
`

const ContainerRoot = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(${props => props.$visMenu ? '100% - 250px' : '100%'});
  height: 100%;
  position: fixed;
  right: 0;
  z-index: 1;

  @media (max-width: 768px) {
    width: 100%;
  }
`

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: calc(100% - 128px);
`

export { ContentWrapper, ContainerRoot, Container }