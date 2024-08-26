"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import "./header.css";

import SearchTrigger from "@/components/header/searchTrigger";
import CartButton from "@/components/header/cartButton";
import UserAvatar from "@/components/header/userAvatar";
import { Separator } from "../ui/separator";

export default function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 h-[80px] z-[999999999999] bg-background w-full !justify-between px-8 center transition-transform duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <Link href="/">
        <img
          className="h-[70px] w-[100px] object-contain"
          src="https://trypyramid.com/img/pyramid-logo-black-horizontal.png"
          alt="logo"
        />
      </Link>
      <nav className="flex space-x-4 bg-background p-2 rounded-[8px]">
        <SearchTrigger />
        <CartButton />
        <Separator orientation="vertical" className="h-12" />
        <UserAvatar />
      </nav>
    </header>
  );
}
