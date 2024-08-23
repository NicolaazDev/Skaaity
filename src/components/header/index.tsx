import Link from "next/link";
import "./header.css";

import SearchTrigger from "@/components/header/searchTrigger";
import CartButton from "@/components/header/cartButton";
import UserAvatar from "@/components/header/userAvatar";

export default function Header() {
  return (
    <header className="bg-transparent fixed top-0 h-[80px] w-full !justify-between px-8 center">
      <Link href="/">
        <img
          className="h-[70px] w-[100px] object-contain"
          src="https://trypyramid.com/img/pyramid-logo-black-horizontal.png"
          alt="logo"
        />
      </Link>
      <nav className="flex space-x-4">
        <SearchTrigger />
        <CartButton />
        <div className="separator"></div>
        <UserAvatar />
      </nav>
    </header>
  );
}
