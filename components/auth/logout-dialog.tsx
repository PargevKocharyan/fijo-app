"use client";

import {
  Dialog,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogContent,
  DialogClose,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { createClient } from "@/utils/supabase/client";
import { useToast } from "../ui/use-toast";

const LogoutDialog = () => {
  const supabase = createClient();
  const { toast } = useToast();

  const signOutHandler = async () => {
    const { error } = await supabase.auth.signOut();
    location.reload();

    if (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">Logout</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Sign Out</DialogTitle>
          <DialogDescription>
            Are you sure you want to sign out?
          </DialogDescription>
        </DialogHeader>
        <form
          className="flex items-center justify-center gap-5"
          action={signOutHandler}
        >
          <Button variant="ghost" type="submit">
            Yes
          </Button>
          <DialogClose>
            <Button variant="default">Cancel</Button>
          </DialogClose>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LogoutDialog;
