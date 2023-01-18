import styled from "styled-components";

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  padding: 4rem;
  /* gap: 32px; */

  label {
    display: flex;
    flex-direction: column;
    font-size: 15px;
    margin-top: 11px;
  }
  input {
    max-width: 20rem;
    height: 2.5rem;
    border-radius: 0.1875rem;
    border: 1px solid #0000002b;
    margin-top: 0.8rem;
    padding: 0.5rem;
  }
  p {
    font-size: 0.8125rem;
    opacity: 0.5;
    /* margin-top: -0.5rem; */
  }

  h1 {
    font-size: 25px;
    font-weight: 500;
  }

  @media screen and (max-width: 50rem) {
    font-size: 0.9375rem;
    padding: 2rem;
    input {
      height: 2rem;
      margin-top: 0.4rem;
    }

    h1 {
      font-size: 20px;
    }
  }
`;
