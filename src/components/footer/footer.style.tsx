import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: var(--grey-color);
  padding: 4rem 0 2rem 0;
`;

export const FooterList = styled.div`
  display: flex;
  justify-content: center;
`;

export const FooterLink = styled.a`
  font-size: 1.5rem;
  color: var(--white-color);
  margin: 0 2rem;
  background-color: var(--grey-color);
  padding: 0.3rem 3rem;
  letter-spacing: 0.3rem;
  transition: all 0.2s;
  font-weight: 300;
  text-decoration: none;

  &:hover {
    transform: rotate(-10deg);
  }
`;

export const FooterParagraph = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: var(--secondary-color);
  letter-spacing: 0.2rem;
  margin-top: 5rem;
  font-weight: 300;
`;