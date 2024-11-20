import styled from "styled-components";


export const SlideCartStyle = styled.div`
  width: 30rem;
  height: 80vh;
  position: relative;
  perspective: 150rem;
`;

export const CardImage = styled.img`
width:100%;
object-fit: cover;
`
export const Slide = styled.div`
display: flex;
align-items: center;
width: 100%;
object-fit: cover;
background-color: #eee;
position: absolute;
transition: opacity 1s;
z-index:100;
`

// Description Section
export const DescriptionSection = styled.div`
  text-align: center;
  background-color: #05c46b;
`;

// Navigation Button
export const NavigationButton = styled.button`
  position: absolute;
  left: 0.5rem;
  top: 50rem;
  padding: 0.5rem;
  background-color: transparent;
  font-size: 1.5rem;
  border: none;
  cursor: pointer;
  font-weight: 400;
  letter-spacing: 0.2rem;
  z-index: 200;

  &:hover {
    background-color: #ddd;
  }
`;

// Title for Clothes
export const TitleClothes = styled.h1`
  font-size: 2.5rem;
  font-weight: 300;
  text-transform: uppercase;
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 100;
`;
