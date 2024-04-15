import { ComponentProps } from "react";
import { twMerge } from "tw-merge";

interface SubTitleProps extends ComponentProps<"h2"> {}

export function SubTitle({ children, className }: SubTitleProps) {
  return (
    <h2
      className={twMerge(
        `text-base-subtitle text-xl font-semibold ${className}`
      )}
    >
      {children}
    </h2>
  );
}
