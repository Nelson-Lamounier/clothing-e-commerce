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
width: 3%;
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
  top: 4rem;
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
  
//   .search-input input {
//     width: 27rem;
//     background-color: transparent;
//     border: none;
//     border-bottom: 0.1rem solid #212529;
//     font-size: 1.5rem;
//     letter-spacing: 0.15rem;
//     outline: none;
//     color: #555;
//     margin-right: 1rem;
//     margin-bottom: -3rem;
//   }
//   .search-input i {
//     font-size: 1.5rem;
//     color: #212529;
//     cursor: pointer;
//     margin-bottom: -3rem;
//   }
//   .search-icon {
//     font-size: 1.5rem;
//     position: absolute;
//     top: 5.5rem;
//     right: 28rem;
//     z-index: 100;
//     animation: searchIconAnim2 0.5s forwards;
//   }
  
//   .search-icon.change {
//     animation: searchIconAnim 1s forwards;
//   }
//   .search-input-wrapper.change {
//     opacity: 1;
//     visibility: visible;
//     transition: all 0.5s 1s;
//   }
//   .search-icon i {
//     color: #212529;
//     cursor: pointer;
//   }
  
//   @keyframes searchIconAnim {
//     0% {
//       top: 5.5rem;
//     }
//     40% {
//       top: 40%;
//       font-size: 25rem;
//     }
//     60% {
//       top: 40%;
//       right: calc(50% + 16rem);
//     }
//     100% {
//       top: 5.5rem;
//       right: calc(50% + 16rem);
//     }
//   }
  
//   @keyframes searchIconAnim2 {
//     0% {
//       right: calc(50% + 16rem);
//     }
//     100% {
//       right: 28rem;
//     }
//   }