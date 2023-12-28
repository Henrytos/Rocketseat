import { ReactNode } from "react";

export function CardContainer({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="h-auto bg-base-card p-10 flex flex-col gap-6">
        {children}
      </div>
    </>
  );
}
