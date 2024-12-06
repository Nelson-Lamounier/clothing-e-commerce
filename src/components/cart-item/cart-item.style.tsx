
import styled from 'styled-components';

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 9rem;
  margin-bottom: 1.5rem;
 

  img {
    width: 30%;
     border: 0.1rem solid black;
  }
`;

export const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;

  span {
    font-size: 16px;
  }
`;
