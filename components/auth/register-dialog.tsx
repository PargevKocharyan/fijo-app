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
import { Form, FormField } from "../ui/form";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  confirmPassword: z.string().min(8),
});

const RegisterDialog = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-fit">Get Started</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="flex">
          <DialogTitle>Sign Up</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-5 mx-auto w-80"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ filed }) => (
                <Input
                  {...filed}
                  type="email"
                  placeholder="Email"
                  className="w-full"
                />
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ filed }) => (
                <Input
                  {...filed}
                  type="password"
                  placeholder="********"
                  className="w-full"
                />
              )}
            />
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterDialog;
