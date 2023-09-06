import { useState } from "react"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FormWrapper, StepGuide, StepsForm, FieldsContainer, Field, FieldRadio, ButtonWrapper, Button } from "./styles"



const EvaluationForm = () => {

  const notify = () => toast("Formulário Enviado")
  const [currentStep, setCurrentStep] = useState(0)
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    rating: "",
  })
  const steps = [
    {
      id: "PERSONAL",
      title: "Dados pessoais"
    },
  ]
  const ratings = [
    {
      0: "Péssimo"
    },
    {
      1: "Ruim"
    },
    {
      2: "Regular"
    },
    {
      3: "Bom"
    },
    {
      4: "Ótimo"
    },
  ]

  function handlePrev() {
    setCurrentStep((prevState) => prevState - 1)
  }

  function handleNext() {
    setCurrentStep((prevState) => prevState + 1)
  }

  function handleInputChange(event) {
    const { name, value } = event.target

    setFormValues((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    console.log(formValues)
    notify()
  }

  return (
    <>
      <ToastContainer />
      <FormWrapper>
        <h1>Avalie seu curso</h1>
        <StepGuide>
          {currentStep + 1} de {steps.length}
        </StepGuide>

        <StepsForm onSubmit={handleSubmit}>
          <FieldsContainer>
            <p>{steps[currentStep].title}</p>

            {steps[currentStep].id === "PERSONAL" && (
              <div className="fields">
                <Field>
                  <input
                    type="text"
                    placeholder="Nome"
                    name="name"
                    onChange={handleInputChange}
                    value={formValues.name}
                  />
                </Field>
                <Field>
                  <input
                    type="text"
                    placeholder="E-mail"
                    name="email"
                    onChange={handleInputChange}
                    value={formValues.email}
                  />
                </Field>
                <Field>
                  <input
                    type="text"
                    placeholder="Telefone"
                    name="phone"
                    onChange={handleInputChange}
                    value={formValues.phone}
                  />
                </Field>
                <FieldRadio>
                  {ratings.map((rating, index) => (
                    <label key={index}>
                      <input
                        type="radio"
                        name="rating"
                        value={Object.keys(rating)[0]}
                        onChange={handleInputChange}
                        checked={formValues.rating === Object.keys(rating)[0]}
                      />
                      {Object.values(rating)[0]}
                    </label>
                  ))}
                </FieldRadio>
              </div>
            )}

            <ButtonWrapper>
              {currentStep > 0 && (
                <Button type="button" onClick={handlePrev}>
                  Previous
                </Button>
              )}

              {currentStep < steps.length - 1 && (
                <Button type="button" onClick={handleNext}>
                  Next
                </Button>
              )}

              {currentStep === steps.length - 1 && (
                <Button type="submit">
                  Enviar
                </Button>
              )}
            </ButtonWrapper>
          </FieldsContainer>
        </StepsForm>
      </FormWrapper>
    </>
  )
}

export default EvaluationForm