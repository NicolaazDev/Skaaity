"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

import { ChevronDownIcon, DoorOpenIcon, PencilRulerIcon } from "lucide-react";
import { TbSkateboard } from "react-icons/tb";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";

function UserPopover({ user }: { user: any }) {
  const [open, setOpen] = useState(false);

  return (
    <Popover onOpenChange={setOpen} open={open}>
      <PopoverTrigger asChild onClick={() => setOpen(!open)}>
        <div className="center cursor-pointer">
          <img
            src={user.image as string}
            alt={user.name as string}
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              marginRight: "10px",
            }}
          />
          <div className="center-col !items-start ">
            <span className="text-[10px] opacity-80">Olá, Bem vindo!</span>
            <span className="text-[13px] mt-1">{user.name}</span>
          </div>
          <ChevronDownIcon
            className={`mx-4 transition-all duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </div>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className="w-[200px] mt-2 shadow-none bg-background border-gray-200 border border-solid"
      >
        <nav className="w-full center-col !items-start font-poppinsLight space-y-2">
          <Link href="/profile" className="user-link">
            <TbSkateboard size={20} strokeWidth={1} />
            <span>Meus Skates</span>
          </Link>
          <Link href="/create" className="user-link">
            <PencilRulerIcon size={20} strokeWidth={1} />
            <span>Criar Skates</span>
          </Link>
          <Link href="/auth/signout" className="user-link">
            <DoorOpenIcon size={20} strokeWidth={1} />
            <span>Sair</span>
          </Link>
        </nav>
      </PopoverContent>
    </Popover>
  );
}

export default function UserAvatar() {
  const { data: session } = useSession();

  // const session = {
  //   user: {
  //     image:
  //       "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1724371200&semt=ais_hybrid",
  //     name: "Johan Henrique",
  //   },
  // };

  if (!session) {
    return (
      <Link
        className="main-gradient text-background font-poppinsLight center rounded-[8px] w-[140px]"
        href="/auth"
      >
        Login
      </Link>
    );
  }

  if (session.user) {
    return (
      <div style={{ display: "flex", alignItems: "center" }}>
        <UserPopover user={session.user} />
      </div>
    );
  } else {
    return <button onClick={() => signIn()}>Login</button>;
  }
}
