import styled from "styled-components";

export const SignInContainer = styled.div`
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
  form{
  width: 30rem;
  }

`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  button {
  color: #555;
  text-transform: uppercase;
  margin: 2rem 0;
  letter-spacing: 0.1rem;
  font-size: 1rem;
  font-weight: 300;
  cursor: pointer;
  padding: 1rem 1rem;
  transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out;
  background: transparent;
  border: 0.1rem solid #555;
  border-radius: 0.3rem;

  &:hover {
    transform: scale(1.1);

  }
  }
`;