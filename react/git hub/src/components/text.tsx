import { ComponentProps } from "react";

interface TextProps extends ComponentProps<"p"> {}
export function Text({ children }: TextProps) {
  return <p className="text-base-text text-base">{children}</p>;
}
