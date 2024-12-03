import styled from "styled-components";

export const FormInputWrapper = styled.div`
  width: 100%;
  margin: 1.5rem 0;
  &.hidden {
    visibility: hidden;
    opacity: 0;
    transition: all 0.3s;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 5rem;
  font-size: 1.2rem;
  padding: 0 3rem;
  letter-spacing: 0.2rem;
  border: 0.1rem solid #555;
  border-radius: 0.3rem;


  &:focus {
    border-color: var(--primary-color);
    outline: none;
  }
`;

export const Message = styled.p`
  position: absolute;
  left: 2rem;
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  margin-top: 1rem;
  color: #ff3f34;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.3s;

  &.message {
    visibility: visible;
    opacity: 1;
  }
`;