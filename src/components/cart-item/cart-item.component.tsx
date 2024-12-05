import { FC } from "react";

import { CartItemContainer, ItemDetails } from "./cart-item.style";

import { CartItem as TCartItem } from "../../store/cart/cart.slice";

type CartItemProps = {
  cartItem: TCartItem;
};

const CartItem: FC<CartItemProps> = ({ cartItem }) => {
  const { name, ImageUrl, price, quantity } = cartItem;

  return (
    <CartItemContainer>
      <img src={ImageUrl} alt={`${name}`} />
      <ItemDetails>
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x €{price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
