import { CartItem } from "@/context/cartContext";

export const addToCart = (cart: CartItem[], item: CartItem): CartItem[] => {
  const existingItem = cart.find((i) => i.id === item.id);
  if (existingItem) {
    return cart.map((i) =>
      i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
    );
  } else {
    return [...cart, item];
  }
};
