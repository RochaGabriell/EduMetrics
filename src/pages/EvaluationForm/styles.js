import styled from "styled-components"

const FormWrapper = styled.div`
  font-family: sans-serif;
  text-align: center;
  margin: 0 auto;
  padding: 40px 0;
  max-width: 90%;
  width: 100%;

  h1 {
    font-size: 24px;
    margin-bottom: 16px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.text};
  }
`

const StepGuide = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 16px;
`

const StepsForm = styled.form`
  background: ${({ theme }) => theme.colors.background};
  padding: 0;
  display: block;
  margin: 0 auto;
  border-radius: 18px;
  box-shadow: 8px 8px 24px ${({ theme }) => theme.colors.primary};
  max-width: 70%;
  position: relative;
  overflow: hidden;
`

const FieldsContainer = styled.div`
  padding: 24px 24px 40px;
  width: 100%;

  p {
    font-size: 18px;
    margin-bottom: 16px;
    color: ${({ theme }) => theme.colors.text};
  }
`

const Field = styled.div`
  margin-bottom: 16px;

  input {
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    width: 100%;
    max-width: 100%;
    height: 48px;
    padding: 8px;
    font-size: 14px;
  }
`

const FieldRadio = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 0.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};

  label {
    display: flex;
    align-items: center;
    cursor: pointer;

    input {
      margin-right: 0.5rem;
    }
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
  gap: 16px;
`

const Button = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  border: 0;
  padding: 8px;
  color: #fff;
  border-radius: 40px;
  width: 100%;
  padding: 16px;
  outline: none;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
`

export { FormWrapper, StepGuide, StepsForm, FieldsContainer, Field, FieldRadio, ButtonWrapper, Button }