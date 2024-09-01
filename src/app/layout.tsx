import type { Metadata } from "next";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { CartProvider } from "@/context/cartContext";
import { CartSheet } from "@/components/cartSheet";

export const metadata: Metadata = {
  title: "777 Bet",
  description: "Best betting casine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="font-poppinsMedium overflow-x-hidden">
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
