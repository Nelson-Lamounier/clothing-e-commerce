import styled, {keyframes } from "styled-components";

export const Header = styled.div`
background-size: cover;
position: relative;
perspective: 100rem;
` 
  
export const CategoryTitle = styled.h1`
  text-align: center;
  margin: 5rem;
  font-size: 5rem;
  font-weight:300;
  text-transform: uppercase;
  letter-spacing: 2rem
`;

export const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;

`;