import styled from "styled-components";

export const PaymentFormContainer = styled.div`
  height: 300px;
  dispatch: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.form`
  height: 100px;
  min-width: 500px;
`;


export const PaymentButton = styled.button`
  background-color: #ffff;
  color: black;
  padding: 1rem;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
  }
`;
