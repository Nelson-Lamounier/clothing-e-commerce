import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import CartItem from "../cart-item/cart-item.component";

import { setIsCartOpen } from "../../store/cart/cart.slice";

import { selectCartItems } from "../../store/cart/cart.selector";

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
  Button,
} from "./cart-dropdown.style";

const CartDropdown = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();
  console.log("Cart items from selector:", cartItems);

  const goToCheckoutHandler = () => {
    navigate("/checkout");
    dispatch(setIsCartOpen(false));
  };
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item._id} cartItem={item} />)
        ) : (
          <EmptyMessage as="span">Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      {cartItems.length > 0 && (
        <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
      )}
    </CartDropdownContainer>
  );
};

export default CartDropdown;
