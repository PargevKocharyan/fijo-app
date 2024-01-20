"use client";

import {
  BadgeInfoIcon,
  BriefcaseIcon,
  ChevronDown,
  GripIcon,
  LogOutIcon,
  SlidersIcon,
  StarIcon,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "../ui/dropdown-menu";
import { createClient } from "@/utils/supabase/client";
import { useToast } from "../ui/use-toast";

const menuItems = [
  {
    icon: <GripIcon size={24} />,
    label: "Overview",
  },
  {
    icon: <BadgeInfoIcon size={24} />,
    label: "Company Info",
  },
  {
    icon: <BriefcaseIcon size={24} />,
    label: "Company Jobs",
  },
  {
    icon: <StarIcon size={24} />,
    label: "Saved Resumes",
  },
  {
    icon: <SlidersIcon size={24} />,
    label: "Settings",
  },
];

const EmployerAvatar = ({
  children,
  name = "Google Inc.",
}: {
  children: React.ReactNode;
  name?: string;
}) => {
  const supabase = createClient();
  const { toast } = useToast();

  const signOutHandler = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } else {
      location.reload();
    }
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className=" focus:outline-none">
        <div className="flex items-center ">
          {children}
          <ChevronDown size={24} />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64 bg-white border-none rounded-xl">
        <DropdownMenuLabel className="flex gap-4 mb-5">
          {children}
          <div className="flex flex-col">
            <p>
              <span className="text-xs"> Welcome</span> <br />{" "}
              <span className=" text-accent">{name}</span>{" "}
            </p>
          </div>
        </DropdownMenuLabel>
        {menuItems.map((menuItem, index) => (
          <DropdownMenuItem
            key={index}
            className="flex gap-3 p-2 text-sm font-semibold cursor-pointer text-foreground opacity-70 hover:opacity-100 hover:text-foreground"
          >
            {menuItem.icon}
            <span>{menuItem.label}</span>
          </DropdownMenuItem>
        ))}
        <DropdownMenuItem
          onSelect={signOutHandler}
          className="flex gap-3 p-2 text-sm font-semibold cursor-pointer text-foreground opacity-70 hover:opacity-100 hover:text-foreground"
        >
          <LogOutIcon size={24} />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default EmployerAvatar;
