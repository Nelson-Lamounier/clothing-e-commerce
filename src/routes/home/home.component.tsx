import {
  Header,
  Center,
  SearchInputWrapper,
  SearchInput,
  HeaderText,
  Heading,
  HeaderParagraph,
  HeaderImage,
  LogoContainer,
  LogoHeader,
  LogoSpan,
} from "./home.style";

import SearchBar from "../components/search/search-bar.component";
import StickyNavBar from "../components/menu/sticky-nav/sticky-nav.component";

const Home = () => {
  return (
    <>
      <Header>
<StickyNavBar/>
        <Center>
          <HeaderText>
            <Heading>Outdoor life</Heading>
            <HeaderParagraph>
              It’s okay to live a life others don’t understand
            </HeaderParagraph>
          </HeaderText>
          <HeaderImage
            src="https://dbsecommerce.s3.eu-west-1.amazonaws.com/images/Man/hero-img.png"
            alt="Header Image"
          />
          <LogoContainer>
            <LogoHeader>
              <LogoSpan delay={0.1}>G</LogoSpan>
              <LogoSpan delay={0.2}>Y</LogoSpan>
              <LogoSpan delay={0.3}>M</LogoSpan>
              <LogoSpan delay={0.4}>B</LogoSpan>
              <LogoSpan delay={0.5}>S</LogoSpan>
            </LogoHeader>
          </LogoContainer>
        </Center>
      </Header>
    </>
  );
};

export default Home;
