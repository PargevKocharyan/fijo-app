"use client";

import { usePathname } from "next/navigation";
import { menuItemsEmployer } from "@/utils/config/menu-items";
import Link from "next/link";
import { cn } from "@/utils/shadcn/utils";
import Image from "next/image";
import LogoutClient from "@/components/auth/logout-client";
import { LogOutIcon, MenuIcon } from "lucide-react";
import { SheetContent, SheetTrigger, Sheet } from "@/components/ui/sheet";

export default function EmployerMenuMonile() {
  const pathname = usePathname();

  const menuContent = (
    <div className="flex flex-col justify-between gap-3 h-3/5">
      {/* Link to landing */}
      <Link href="/">
        <Image
          src="/img/Logo.svg"
          alt="logo"
          width={28}
          height={26}
          className="cursor-pointer"
        />
      </Link>

      {/* Navigation */}
      <nav className="flex flex-col gap-6 mt-12">
        {menuItemsEmployer.map((menuItem, idx) => (
          <Link
            key={idx}
            href={menuItem.link}
            className={cn(
              pathname === menuItem.link && "text-accent opacity-100",
              "flex gap-3 text-sm font-semibold cursor-pointer opacity-70 hover:opacity-100 hover:text-accent duration-300 ease-in-out"
            )}
          >
            {menuItem.icon}
            {menuItem.label}
          </Link>
        ))}
      </nav>
      {/* Logout Button */}
      <LogoutClient className="flex items-center gap-4 font-semibold duration-300 ease-in-out cursor-pointer hover:opacity-100 opacity-70 hover:text-accent">
        <LogOutIcon size={24} />
        <span>Logout</span>
      </LogoutClient>
    </div>
  );

  return (
    <Sheet>
      <SheetTrigger className="flex xl:hidden">
        <MenuIcon size={24} />
      </SheetTrigger>
      <SheetContent className="font-sans" side="left">
        {menuContent}
      </SheetContent>
    </Sheet>
  );
}
