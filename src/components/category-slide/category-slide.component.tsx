
import CategoryPreview from "../category-preview/category-preview.component";

import { SectionSlides, SlidesWrapper } from "./category-slice.style";

const CategorySlides = () => {
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
        < CategoryPreview slides={menSlides} title="mens" categoryPath="category/mens" />
        < CategoryPreview
          slides={womenSlides}
          title="womens"
          categoryPath="category/womens"
        />
        < CategoryPreview
          slides={salesSlides}
          title="sales"
          categoryPath="category/sales"
        />
      </SlidesWrapper>
    </SectionSlides>
  );
};

export default CategorySlides;
