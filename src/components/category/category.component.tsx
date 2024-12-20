import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "../../store/categories/category.selector";

import VideoCarousel from "../video-carousel/video-carousel.component";
import { Header, CategoryTitle, CategoryContainer } from "./category.style";
import ProductCard from "../product-card/product-card.component";
import Spinner from "../spinner/spinner.component";

type CategoryRouteParams = {
  category: string;
};

const Category = () => {
  const { category } = useParams<
    keyof CategoryRouteParams
  >() as CategoryRouteParams;
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <Header>
        <VideoCarousel />
      </Header>
      <CategoryTitle>{category.toLocaleUpperCase()}</CategoryTitle>
      {isLoading ? ( <Spinner/>): (
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
      </CategoryContainer>
      )}
    </>
  );
};

export default Category;
