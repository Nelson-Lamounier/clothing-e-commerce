import styled, { keyframes } from "styled-components";


export const Header = styled.div`
width: 100%;
height: 100vh;
background: linear-gradient(rgba(230, 229, 229, 0.718), rgb(235, 235, 235)),
  url(https://dbsecommerce.s3.eu-west-1.amazonaws.com/images/landscape/Hero-img-02.jpg)
    center no-repeat;
background-size: cover;
position: relative;
perspective: 100rem;
` 
  
export const HeaderText = styled.div`
text-align: center;
text-transform: uppercase;
letter-spacing: 0.1rem;
` 
  
export const Heading = styled.h1`
font-size: 50px;
color: var(--dark-color);
`

export const HeaderParagraph =styled.p`
font-size: 20px;
font-weight: 500;
color: var(--grey-color);
max-width: 70rem;
margin: auto;

`
export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SearchInputWrapper = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s;
 
`

export const SearchInput = styled.div`
width: 30rem;
display: flex;
align-items: center;
` 
export const HeaderImage = styled.img`
height: 90vh;
width: 35%;
object-fit: cover;
` 

// Keyframes for the jumping animation
const dropLetters = keyframes`
  5% {
    transform: translateY(0);
  }
  10% {
    transform: translateY(0);
  }
  15% {
    transform: translateY(-100%);
  }
  20% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(0);
  }
`;

// Styled Logo Container
export const LogoContainer = styled.div`
  position: absolute;
  top: 6rem;
  right: 4rem;
`;

// Styled Logo Header
export const LogoHeader = styled.h1`
  display: flex;
`;


// Styled Logo Span
export const LogoSpan = styled.span<{ delay?: number }>`
  font-size: 2rem;
  font-weight: 900;
  color: var(--dark-color);
  text-transform: uppercase;
  background-color: var(--white-color);
  width: 3.5rem;
  height: 3.5rem;
  margin: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${dropLetters} 5s ease-in-out infinite;
  animation-delay: ${({ delay }) => `${delay}s`};
`;
