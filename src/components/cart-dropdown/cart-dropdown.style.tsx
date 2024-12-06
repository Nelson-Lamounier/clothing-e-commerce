import styled from "styled-components";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 30rem;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;

  background-color: #fff;
  top: 9rem;
  right: 40px;
  z-index: 999;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`;

export const EmptyMessage = styled.span`
  font-size: 1.8rem;
  margin: 5rem auto;
`;

export const CartItems = styled.div`
  height: 50rem;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  color: black;
`;

export const Button = styled.button`
  background-color: #ffff;
  color: black;
  padding: 1rem;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
  }
`;
