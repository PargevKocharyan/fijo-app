"use client";

import { cn } from "@/utils/shadcn/utils";
import { createClient } from "@/utils/supabase/client";

interface logutProps {
  children: React.ReactNode;
  className?: string;
}

export default function LogoutClient({ children, className }: logutProps) {
  const supabase = createClient();

  const signOutHandler = async () => {
    const { error } = await supabase.auth.signOut();
    location.reload();

    if (error) {
      console.log(error);
    }
  };
  return (
    <div className={cn(className)} onClick={signOutHandler}>
      {children}
    </div>
  );
}
