import { Header } from "@/components/header";
import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="">
        <Outlet />
      </section>
    </main>
  );
}
