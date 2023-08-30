import { useRouteError } from "react-router-dom";
import { styled } from "styled-components";

const ErrorDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`

function ErrorPage() {
  const error = useRouteError();

  return (
    <ErrorDiv className="error_page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </ErrorDiv>
  );
}

export default ErrorPage