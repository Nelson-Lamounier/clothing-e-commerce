import styled from "styled-components";


export const ProductContainer = styled.div`
  width: 30rem;
  text-align: center;
`;

export const ProductImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const ProductTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 0.1rem;
  overflow: hidden;
  transition: width 0.3s;
`;

export const ProductDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  letter-spacing: 0.1rem;
`;

export const ProductPrice = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  color: #555;
  margin-bottom: 2rem;
`;




