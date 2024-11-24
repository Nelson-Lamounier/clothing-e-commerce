import { FC, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

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

const  CategoryPreview: FC<SlideCartProps> = ({ slides, title, categoryPath }) => {
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
 export default  CategoryPreview;

