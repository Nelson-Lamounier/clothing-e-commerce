import { FC, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  SlideCartStyle,
  Slide,
  CardImage,
  TitleClothes,
  NavigationButton,
} from "./category-preview.style";



interface Slide {
    src: string;
    alt: string;
  }

interface SlideCartProps {
  slides: Slide[];
  title: string;
  categoryPath: string;
}

const SlideCart: FC<SlideCartProps> = ({ slides, title, categoryPath }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigation = useNavigate();

  useEffect(()=>{
    const interval = setInterval(()=>{
        setCurrentIndex((prevIndex) => (prevIndex +1) % slides.length)
    },3000)
    return () => clearInterval(interval)
  }, [slides])

  return(
    <SlideCartStyle>
        {slides.map((slide, index) => (
            <Slide
            key={index}
            style={{visibility: index === currentIndex ? "visible": "hidden", opacity: index === currentIndex? 1: 0}}>
                <CardImage src={slide.src} alt={slide.alt}/>

            </Slide>
        ))}
        <TitleClothes>{title}</TitleClothes>
        < NavigationButton onClick={() => navigation(categoryPath)}>More &gt;&gt;</NavigationButton>
    </SlideCartStyle>
  )}
 export default SlideCart;

//   const CategorySlides: FC = () => {

//   const menSlides: Slide[] = [
//     {
//       src: "https://dbsecommerce.s3.eu-west-1.amazonaws.com/images/Man/man01.png",
//       alt: "Man wearing gym clothes",
//     },
//     {
//       src: "https://dbsecommerce.s3.eu-west-1.amazonaws.com/images/Man/man02.png",
//       alt: "Man wearing gym clothes",
//     },
//     {
//       src: "https://dbsecommerce.s3.eu-west-1.amazonaws.com/images/Man/man03.png",
//       alt: "Man wearing gym clothes",
//     },
//   ];
//   const womenSlides: Slide[] = [
//     {
//       src: "https://dbsecommerce.s3.eu-west-1.amazonaws.com/images/woman/woman01.png",
//       alt: "Woman wearing gym clothes",
//     },
//     {
//       src: "https://dbsecommerce.s3.eu-west-1.amazonaws.com/images/woman/woman02.png",
//       alt: "Woman wearing gym clothes",
//     },
//     {
//       src: "https://dbsecommerce.s3.eu-west-1.amazonaws.com/images/woman/woman04.png",
//       alt: "Woman wearing gym clothes",
//     },
//   ];
//   const salesSlides: Slide[] = [
//     {
//       src: "https://dbsecommerce.s3.eu-west-1.amazonaws.com/images/Man/man06.png",
//       alt: "",
//     },
//     {
//       src: "https://dbsecommerce.s3.eu-west-1.amazonaws.com/images/Man/man07.png",
//       alt: "",
//     },
//     {
//       src: "https://dbsecommerce.s3.eu-west-1.amazonaws.com/images/woman/woman08.png",
//       alt: "Woman wearing gym clothes",
//     },
//   ];

//   return (

//       <SectionSlides>

//       </SectionSlides>

//   );
// };



// export default SlideCart;
