"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  BadgeInfoIcon,
  BriefcaseIcon,
  GripIcon,
  LogOutIcon,
  MenuIcon,
  SlidersIcon,
  StarIcon,
} from "lucide-react";

import Link from "next/link";
import LogoutClient from "../logout-client";

import { menuItemsCandidate } from "@/utils/config/menu-items";

export default function CandidateSheet({ name }: { name: string }) {
  return (
    <Sheet>
      <SheetTrigger className="flex md:hidden">
        <MenuIcon className="cursor-pointer" size={24} />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            Wellcome, <span className="text-accent">{name}</span>
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-5 mt-10 font-sans">
          {/* Menu items */}
          {menuItemsCandidate.map(({ icon, label, link }, idx) => (
            <Link className="flex items-center gap-4 " key={idx} href={link}>
              {icon}
              <span>{label}</span>
            </Link>
          ))}

          {/* Logout */}
          <LogoutClient className="flex items-center gap-4 cursor-pointer">
            <LogOutIcon size={24} />
            <span>Logout</span>
          </LogoutClient>
        </div>
      </SheetContent>
    </Sheet>
  );
}
