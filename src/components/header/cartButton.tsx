import React from "react";

import { ShoppingBagIcon } from "lucide-react";
import { useCart } from "@/context/cartContext";

interface Props {}

const CartButton: React.FC<Props> = ({}) => {
  const { setOpenCart } = useCart();

  return (
    <button
      className="nav-icon center cursor-pointer"
      onClick={() => setOpenCart(true)}
    >
      <ShoppingBagIcon size={20} />
    </button>
  );
};

export default CartButton;
