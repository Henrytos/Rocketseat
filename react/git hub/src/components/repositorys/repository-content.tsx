import { ComponentProps } from "react";

interface RepositoryContentProps extends ComponentProps<"section"> {}

export function RepositoryContent({ children }: RepositoryContentProps) {
  return <section className="grid grid-cols-2 gap-8">{children}</section>;
}
