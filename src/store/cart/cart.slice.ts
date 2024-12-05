import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CategoryItem } from "../categories/category.slice";

// Structure of a product to add
export type CartItem = CategoryItem & {
  quantity: number;
};

// Initail state structure
export interface CartState {
  readonly isCartOpen: boolean;
  readonly cartItems: CartItem[];
}

export const CartInitialState: CartState = {
  isCartOpen: false,
  cartItems: [],
};

// Utility function to add an item to the cart
const addCartItem = (
    cartItems: CartItem[],
    productToAdd: CategoryItem
  ): CartItem[] => {
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === productToAdd.id && cartItem.name === productToAdd.name
    );
  
    if (existingCartItem) {
      return cartItems.map((cartItem) =>
        cartItem.id === productToAdd.id && cartItem.name === productToAdd.name
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  };

// utility function to remove item from cart
const removeCartItem = (
    cartItems: CartItem[],
    cartItemToRemove: CartItem
): CartItem[] => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);

    if (existingCartItem && existingCartItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id)
    }
    return cartItems.map((cartItem) => cartItem.id === cartItemToRemove.id ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem)
}

// Utility function to clear an item from the cart
export const clearCartItem = (
    cartItems: CartItem[],
    cartItemToClear: CartItem
): CartItem[] => cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id)

// Slice
export const cartSlice = createSlice ({
    name: 'cart',
    initialState: CartInitialState,
    reducers: {
        setIsCartOpen(state, action: PayloadAction<boolean>) {
            state.isCartOpen = action.payload;
        },
        addItemToCart(state, action: PayloadAction<CategoryItem>) {
            state.cartItems = addCartItem(state.cartItems, action.payload)
            console.log("Cart State after adding item:", state.cartItems);
        },
        removeItemFromCard(state, action: PayloadAction<CartItem>) {
            state.cartItems = removeCartItem(state.cartItems, action.payload)
        },
        clearItemFromCart(state, action:PayloadAction<CartItem>){
            state.cartItems = clearCartItem(state.cartItems, action.payload)
        }
    }
})

export const {
    setIsCartOpen,
    addItemToCart,
    removeItemFromCard,
    clearItemFromCart,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;