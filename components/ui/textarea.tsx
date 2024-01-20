import * as React from "react";

import { cn } from "@/utils/shadcn/utils";
import { VariantProps, cva } from "class-variance-authority";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {}

const textareaVariants = cva(
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

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <textarea
        className={cn(textareaVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
