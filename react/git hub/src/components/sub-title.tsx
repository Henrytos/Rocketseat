import { ComponentProps } from "react";

interface SubTitleProps extends ComponentProps<"h2"> {}

export function SubTitle({ children }: SubTitleProps) {
  return (
    <h2 className="text-base-subtitle text-xl font-semibold">{children}</h2>
  );
}
