import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Define the interface of the Cart state
interface State {
  cart: ProductDetailType[];
  totalItems: number;
  totalPrice: number;
}

// Define the interface of the actions that can be performed in the Cart
interface Actions {
  addToCart: (Item: ProductDetailType) => void;
  removeFromCart: (Item: ProductDetailType) => void;
}

// Initialize a default state
const INITIAL_STATE: State = {
  cart: [],
  totalItems: 0,
  totalPrice: 0,
};

// Create the store with Zustand, combining the status interface and actions
export const useCartStore = create<State & Actions>((set, get) => ({
  cart: INITIAL_STATE.cart,
  totalItems: INITIAL_STATE.totalItems,
  totalPrice: INITIAL_STATE.totalPrice,
  addToCart: (product: ProductDetailType) => {
    const cart = get().cart;
    const cartItem = cart.find((item) => item.id === product.id);

    // If the item already exists in the Cart, increase its quantity
    if (cartItem) {
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: (item.quantity as number) + 1 }
          : item
      );
      set((state) => ({
        cart: updatedCart,
        totalItems: state.totalItems + 1,
        totalPrice: state.totalPrice + product.currentPrice,
      }));
    } else {
      const updatedCart = [...cart, { ...product, quantity: 1 }];

      set((state) => ({
        cart: updatedCart,
        totalItems: state.totalItems + 1,
        totalPrice: state.totalPrice + product.currentPrice,
      }));
    }
  },
  removeFromCart: (product: ProductDetailType) => {
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== product.id),
      //   totalItems: state.totalItems - 1,
      totalItems: 0,
      totalPrice: state.totalPrice - product.currentPrice,
    }));
  },
}));
