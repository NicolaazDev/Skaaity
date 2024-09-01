"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import { useCart } from "@/context/cartContext";

export function CartSheet() {
  const { openCart, setOpenCart, cart } = useCart();

  return (
    <Sheet open={openCart} onOpenChange={() => setOpenCart(false)}>
      <SheetContent className="z-[99999999]">
        <SheetHeader>
          <SheetTitle className="font-poppinsLight">
            Seu carrinho ({cart.length})
          </SheetTitle>
        </SheetHeader>
        <div className="grid gap-4 py-4"></div>
        <SheetFooter>
          <SheetClose asChild>
            <button type="submit">Save changes</button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
