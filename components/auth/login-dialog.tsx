"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Input } from "../ui/input";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { useToast } from "../ui/use-toast";
import RegisterDialog from "./register-dialog";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

const LoginDialog = ({ children }: { children: React.ReactNode }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  // State for user type
  const [role, setRole] = useState<"employer" | "candidate">("employer");
  const unselectedStyle =
    "flex w-[49%] gap-2 p-3 border border-foreground rounded-xl bg-white text-foreground";
  const selectedStyle =
    "flex w-[49%] gap-2 p-3 border border-foreground rounded-xl bg-foreground text-white";

  // Add supabase client
  const supabase = createClient();

  // Toast for errors and messages
  const { toast } = useToast();

  // Handle form submission and sign up
  async function onSubmit(fields: z.infer<typeof formSchema>) {
    // Sign up user
    const { data, error } = await supabase.auth.signInWithPassword({
      email: fields.email,
      password: fields.password,
    });

    // Handle success
    if (data) {
      location.reload();
      toast({
        title: "Success",
        description: "Wellcome to FIJO!",
        variant: "default",
      });
    }

    // Handle errors
    if (error) {
      console.log(error);
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="bg-white">
        <div className="mx-auto w-72">
          <DialogHeader className="flex">
            <DialogTitle>Log In</DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-5 mt-8"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        variant="underline"
                        placeholder="Email"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        variant="underline"
                        placeholder="Password"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className=""></div>
              <div className="flex flex-col gap-3">
                <Button type="submit">Log In</Button>
                <RegisterDialog>
                  <Button variant="ghost">Register</Button>
                </RegisterDialog>
              </div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
