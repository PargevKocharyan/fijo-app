"use client";
import {
  Dialog,
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
import { BriefcaseIcon, ContactIcon } from "lucide-react";
import { createClient } from "@/utils/supabase/client";

const formSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
  })
  .refine((values) => values.password === values.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const RegisterDialog = () => {
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

  // Handle form submission and sign up
  async function onSubmit(fields: z.infer<typeof formSchema>) {
    // Sign up user
    const { data, error } = await supabase.auth.signUp({
      email: fields.email,
      password: fields.password,
      options: {
        emailRedirectTo: "/auth/confirm",
        data: {
          type: role,
        },
      },
    });

    console.log(data, error);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-fit">Get Started</Button>
      </DialogTrigger>
      <DialogContent className="bg-white">
        <div className="mx-auto w-72">
          <DialogHeader className="flex">
            <DialogTitle>Sign Up</DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-5"
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
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        variant="underline"
                        placeholder="Confirm Password"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* User type */}
              <div className="flex justify-between">
                {/* Employer */}
                <button
                  onClick={(event) => {
                    event.preventDefault();
                    setRole("employer");
                  }}
                  className={
                    role === "employer" ? selectedStyle : unselectedStyle
                  }
                >
                  <BriefcaseIcon />
                  <div className="text-left">
                    <h4 className="font-bold">Employer</h4>
                    <p className="text-xs">Looking to hire for my company</p>
                  </div>
                </button>
                {/* Candidate */}
                <button
                  onClick={(event) => {
                    event.preventDefault();
                    setRole("candidate");
                  }}
                  className={
                    role === "candidate" ? selectedStyle : unselectedStyle
                  }
                >
                  <ContactIcon />
                  <div className="text-left ">
                    <h4 className="font-bold">Candidate</h4>
                    <p className="text-xs">Looking for new job opportunities</p>
                  </div>
                </button>
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit">Sign Up</Button>
                <Button variant="ghost">Sign In</Button>
              </div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterDialog;
