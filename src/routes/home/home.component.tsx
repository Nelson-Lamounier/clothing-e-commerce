import { GlobalStyles } from "../../global.style";
import SearchBar from "../../components/search/search-bar.component";
import MainHeader from "../../components/header/header.component";
import StickyNavBar from "../../components/menu/sticky-nav/sticky-nav.component";
import CategorySlides from "../../components/category-slide/category-slide.component";
import Testimonial from "../../components/testimonial/testimonial.component";
import Footer from "../../components/footer/footer.component";
import CategoryGallery from "../../components/product-card/product-card.component";

const Home = () => {
  return (
    <>
      <GlobalStyles />
  
      <MainHeader />
      <CategorySlides />
      <Testimonial />

    </>
  );
};

export default Home;
