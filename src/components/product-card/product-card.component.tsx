import { FC } from "react";

import { CategoryItem } from "../../store/categories/category.slice";


import {
  ProductContainer,
  ProductImage,
  ProductTitle,
  ProductDescription,
  ProductPrice,
} from "./product-card.style";

type ProductCardProps = {
  product: CategoryItem;
};

const ProductCard: FC<ProductCardProps> = ({ product }) => {

  return (
    <>
      <ProductContainer key={product.id}>
        <ProductImage src={product.ImageUrl} alt={product.name} />
        <div>
          <ProductTitle>{product.name}</ProductTitle>
          <ProductDescription>{product.description}</ProductDescription>
          <ProductPrice>€{product.price}</ProductPrice>
        </div>
      </ProductContainer>
    </>
  );
};

export default ProductCard;
