import { ComponentProps } from "react";

interface TitleProps extends ComponentProps<"h1"> {}

export function Title({ children }: TitleProps) {
  return (
    <h2 className="text-base-subtitle text-2xl font-semibold">{children}</h2>
  );
}
