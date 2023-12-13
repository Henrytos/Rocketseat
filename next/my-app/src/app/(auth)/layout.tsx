import { ReactNode } from "react";

export default function layoutAuth({ children }: { children: ReactNode }) {
  return (
    <main>
      {children}
      <p>painel de controle</p>
    </main>
  );
}
