import { CartItem } from "@/context/cartContext";

export const removeFromCart = (cart: CartItem[], id: string): CartItem[] => {
  return cart.filter((item) => item.id !== id);
};
