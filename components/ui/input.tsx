import * as React from "react";

import { cn } from "@/utils/shadcn/utils";
import { cva, type VariantProps } from "class-variance-authority";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  type?: "text" | "password" | "email" | "number";
}

const inputVariants = cva(
  "px-2 py-3 font-sans w-full text-sm focus:outline-none placeholder:text-muted-foreground",
  {
    variants: {
      variant: {
        default: "shadow-md rounded-md bg-white text-foreground ",
        underline: "border-b text-foreground border-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ variant, className }))}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
