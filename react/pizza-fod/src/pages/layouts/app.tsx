import { Header } from "@/components/header";
import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="px-10 py-5">
        <Outlet />
      </section>
    </main>
  );
}
