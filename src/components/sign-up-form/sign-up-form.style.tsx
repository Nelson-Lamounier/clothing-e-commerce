import styled from "styled-components";

export const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 7rem;
  color: var(--dark-color);

  h2 {
  margin: 7rem;
  font-size: 7rem;
  font-weight: 100;
  letter-spacing: 3rem;
  }
  p {
  font-size: 1.5rem;
  }

`;


export const FormBtn = styled.button`
  width: 100%;
  color: #555;
  text-transform: uppercase;
  margin: 2rem 0;
  letter-spacing: 0.1rem;
  font-size: 1.3rem;
  font-weight: 300;
  cursor: pointer;
  padding: 1.3rem 2rem;
  transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out,
  box-shadow 0.3s ease-in-out;
  background: transparent;
  border: 0.1rem solid #555;
  border-radius: 0.3rem;

  &:hover {
    transform: scale(1.1);
  }
    div {
    font-size: 1.5rem
    }
`;


