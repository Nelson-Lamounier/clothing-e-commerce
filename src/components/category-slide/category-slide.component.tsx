import { FC } from "react";

import SlideCart from "../category-preview/category-preview.component";

import { SectionSlides, SlidesWrapper } from "./category-slice.style";

const CategorySlides: FC = () => {
  const menSlides = [
    {
      src: "https://dbsecommerce.s3.eu-west-1.amazonaws.com/images/Man/man01.png",
      alt: "Man wearing gym clothes",
    },
    {
      src: "https://dbsecommerce.s3.eu-west-1.amazonaws.com/images/Man/man02.png",
      alt: "Man wearing gym clothes",
    },
    {
      src: "https://dbsecommerce.s3.eu-west-1.amazonaws.com/images/Man/man03.png",
      alt: "Man wearing gym clothes",
    },
  ];

  const womenSlides = [
    {
      src: "https://dbsecommerce.s3.eu-west-1.amazonaws.com/images/woman/woman01.png",
      alt: "Woman wearing gym clothes",
    },
    {
      src: "https://dbsecommerce.s3.eu-west-1.amazonaws.com/images/woman/woman02.png",
      alt: "Woman wearing gym clothes",
    },
    {
      src: "https://dbsecommerce.s3.eu-west-1.amazonaws.com/images/woman/woman04.png",
      alt: "Woman wearing gym clothes",
    },
  ];

  const salesSlides = [
    {
      src: "https://dbsecommerce.s3.eu-west-1.amazonaws.com/images/Man/man06.png",
      alt: "Man wearing gym clothes",
    },
    {
      src: "https://dbsecommerce.s3.eu-west-1.amazonaws.com/images/Man/man07.png",
      alt: "Man wearing gym clothes",
    },
    {
      src: "https://dbsecommerce.s3.eu-west-1.amazonaws.com/images/woman/woman08.png",
      alt: "Woman wearing gym clothes",
    },
  ];

  return (
    <SectionSlides>
      <SlidesWrapper>
        <SlideCart slides={menSlides} title="Mens" categoryPath="/mancatalog" />
        <SlideCart
          slides={womenSlides}
          title="Women"
          categoryPath="/womencatalog"
        />
        <SlideCart
          slides={salesSlides}
          title="Sales"
          categoryPath="/salescatalog"
        />
      </SlidesWrapper>
    </SectionSlides>
  );
};

export default CategorySlides;
