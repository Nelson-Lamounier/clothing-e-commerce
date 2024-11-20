import styled from "styled-components";

export const Section = styled.section<{ bgColor: string }>`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--primaryColor);
  background-color: ${({ bgColor }) => bgColor};
`;

export const HomeSection = styled(Section)`
  background-image: url("https://images.unsplash.com/photo-1581453904507-626ddb717f14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80");
  background-size: cover;
  background-position: center center;

  a {
    position: absolute;
    z-index: 2;
    top: 1.5rem;
    left: 1.5rem;
    text-decoration: none;
    font-size: 0.8rem;
    padding-bottom: 5px;
    color: var(--primaryColor);
    border-bottom: 1px solid var(--primaryColor);

    @media (max-width: 600px) {
      top: 1rem;
      left: 1rem;
    }
  }
`;