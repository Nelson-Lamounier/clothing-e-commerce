import styled, {keyframes } from "styled-components";

export const Header = styled.div`
background-size: cover;
position: relative;
perspective: 100rem;
` 
  
export const GalleryTitle = styled.h1`
  text-align: center;
  margin: 5rem;
  font-size: 5rem;
  font-weight:300;
  text-transform: uppercase;
  letter-spacing: 2rem
`;

export const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;

`;

export const GalleryLink = styled.div`
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





