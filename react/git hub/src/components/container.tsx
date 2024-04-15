import { ComponentProps } from "react";
import { twMerge } from "tw-merge";

interface ConatinerProps extends ComponentProps<"main"> {}

export function Container({ children, className }: ConatinerProps) {
  return (
    <>
      <main className={twMerge(`max-w-4xl mx-auto  ${className}`)}>
        {children}
      </main>
    </>
  );
}
