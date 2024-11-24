import styled from "styled-components";

export const SectionSignup = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormHeading = styled.h1`
  position: absolute;
  margin-top: 3rem;
  top: 5rem;
  font-size: 7rem;
  font-weight: 100;
  color: var(--dark-color);
  letter-spacing: 3rem;
  .heading-span-1 {
    z-index: 10;
  }

  .heading-span-2::after {
    content: "";
    position: absolute;
    width: 90%;
    height: 100%;
    background-color: #ffff;
    right: -90%;
    transition: right 0.6s;
  }
`;

export const FormBtnTop = styled.div`
  position: absolute;
  top: 10rem;
  left: 10rem;
  display: flex;
  flex-direction: column;

  button {
    background:transparent;
    font-size: 2rem;
    color: #555;
    font-weight: 300;
    border: none;
    text-align: center;
    letter-spacing: 0.5rem;
    border-radius: 0.1rem;
    margin: 1rem 0;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .signin-btn:hover::after,
  .signup-btn:hover::after {

  }
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  z-index: 100;
`;

export const FormInputWrapper = styled.div`
  margin: 1.5rem 0;
  position: relative;
  &.hidden {
    visibility: hidden;
    opacity: 0;
    transition: all 0.3s;
  }

  input {
    width: 30rem;
    height: 5rem;
    font-size: 1.2rem;
    padding: 0 2rem;
    letter-spacing: 0.2rem;
    border: 0.1rem solid #555;
  }

  .message {
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
  }

  &.error .message {
    visibility: visible;
    opacity: 1;
  }
`;

export const FormBtn = styled.button`
  color: #555;
  text-transform: uppercase;
  margin: 2rem 0;
  letter-spacing: 0.1rem;
  font-size: 1.3rem;
  font-weight: 300;
  cursor: pointer;
  padding: 1.3rem 2rem;
  transition: top 0.3s 0.3s, box-shadow 0.3s;
  background:transparent;
  border: 0.1rem solid #555;



`;