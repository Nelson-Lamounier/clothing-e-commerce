import { FC } from "react";

import { useDispatch } from "react-redux";

import { addItemToCart } from "../../store/cart/cart.slice";

import { CategoryItem } from "../../store/categories/category.slice";

import {
  ProductContainer,
  ProductImage,
  ProductTitle,
  ProductDescription,
  ProductPrice,
  Footer,
  Button,
} from "./product-card.style";

type ProductCardProps = {
  product: CategoryItem;
};

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { name, price, ImageUrl} = product;
  const dispatch = useDispatch()

  const addProductToCart = () => dispatch(addItemToCart(product))
  return (
    <>
      <ProductContainer >
        <ProductImage src={ImageUrl} alt={name} />
        <Footer>
          <ProductTitle>{name}</ProductTitle>
          <ProductDescription>{product.description}</ProductDescription>
          <ProductPrice>€{price}</ProductPrice>
        </Footer>
        <Button onClick={addProductToCart}>Add to card</Button>
      </ProductContainer>
    </>
  );
};

export default ProductCard;
