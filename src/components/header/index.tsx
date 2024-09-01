"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import "./header.css";

import { motion } from "framer-motion";

import SearchTrigger from "@/components/header/searchTrigger";
import CartButton from "@/components/header/cartButton";
import UserAvatar from "@/components/header/userAvatar";
import { Separator } from "../ui/separator";

export default function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [isLoaded, setIsLoaded] = useState(false);

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
    <motion.header
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      onAnimationComplete={() => setIsLoaded(true)}
      className={`fixed top-0 h-[80px] z-[9999999] bg-transparent w-full !justify-between px-8 center duration-300 ${
        showHeader && isLoaded ? "!translate-y-0" : "!-translate-y-full"
      }`}
    >
      <Link href="/">
        <img
          className="h-[110px] w-auto object-cover"
          src="https://res.cloudinary.com/dmceve2cp/image/upload/v1725210877/SKAAITY_1_bpuaez.png"
          alt="logo"
        />
      </Link>
      <nav className="flex space-x-4 bg-background p-2 rounded-[8px]">
        <SearchTrigger />
        <CartButton />
        <Separator orientation="vertical" className="h-12" />
        <UserAvatar />
      </nav>
    </motion.header>
  );
}
