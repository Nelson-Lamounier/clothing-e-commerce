import {FC} from "react";
import {
  FooterContainer,
  FooterList,
  FooterLink,
  FooterParagraph,
} from "./footer.style";

const Footer: FC = () => {
  return (
    <FooterContainer>
      <FooterList>
        <FooterLink href="/register">Login</FooterLink>
        <FooterLink href="/register">Register</FooterLink>
        <FooterLink href="#">About Us</FooterLink>
        <FooterLink href="#">Return Policy</FooterLink>
        <FooterLink href="#">Orders</FooterLink>
      </FooterList>
      <FooterParagraph>
        Copyright&copy;2024 Nelson Lamounier All Rights Reserved
      </FooterParagraph>
    </FooterContainer>
  );
};

export default Footer;