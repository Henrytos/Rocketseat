import { ComponentProps } from "react";
import { twMerge } from "tw-merge";

interface TextProps extends ComponentProps<"p"> {}
export function Text({ children, className }: TextProps) {
  return (
    <p className={twMerge(`text-base-text text-base ${className}`)}>
      {children}
    </p>
  );
}
