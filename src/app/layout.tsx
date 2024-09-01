import type { Metadata } from "next";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { CartProvider } from "@/context/cartContext";
import { CartSheet } from "@/components/cartSheet";

export const metadata: Metadata = {
  title: "Skaaity - Sua loja de skates",
  description: "Skaaity - Sua loja de skates",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="font-poppinsMedium overflow-x-hidden overflow-hidden">
        <CartProvider>
          <SessionProvider>
            <CartSheet />
            {children}
          </SessionProvider>
        </CartProvider>
      </body>
    </html>
  );
}
