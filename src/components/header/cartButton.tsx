import React from "react";

import { ShoppingBagIcon } from "lucide-react";

interface Props {}

const CartButton: React.FC<Props> = ({}) => {
  return (
    <button className="nav-icon center">
      <ShoppingBagIcon size={20} />
    </button>
  );
};

export default CartButton;
