import { ComponentProps } from "react";
import { twMerge } from "tw-merge";

interface CardProps extends ComponentProps<"div"> {}

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={twMerge(`p-8 rounded-lg bg-base-post w-full ${className}`)}
      {...props}
    >
      {children}
    </div>
  );
}
