
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


import CartItem from "../cart-item/cart-item.component";

import { selectCartItems } from "../../store/cart/cart.selector";

import {CartDropdownContainer, EmptyMessage, CartItems} from "./cart-dropdown.style";

const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems)
    const navigate = useNavigate();
    console.log("Cart items from selector:", cartItems);
    const goToCheckoutHandler = () => {
        navigate('/')
    }
    return (
        <CartDropdownContainer>
            <CartItems>
                {cartItems.length ? (
                    cartItems.map((item) => (
                        <CartItem key={item.id} cartItem={item} />
                    ))
                ) : (<EmptyMessage  as ='span'>Your cart is empty</EmptyMessage>)}
            </CartItems>
            <button onClick={goToCheckoutHandler}>GO TO CHECKOUT</button>
        </CartDropdownContainer>
    )
}

export default CartDropdown;
