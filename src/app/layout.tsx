import type { Metadata } from "next";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";

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
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
