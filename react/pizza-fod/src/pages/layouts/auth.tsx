import { Outlet } from "react-router-dom";

export function AuthLayout() {
  return (
    <main className="min-h-screen grid grid-cols-2">
      <section className="p-10 flex flex-col justify-between border-r border-foreground/5 bg-muted text-foreground">
        <h2 className="text-2xl font-semibold">pizza.shop</h2>
        <p className="text-sm font-light">
          feito por henry &copy;
          {new Date().getFullYear()}
        </p>
      </section>
      <section className="grid place-content-center p-10 relative">
        <Outlet />
      </section>
    </main>
  );
}
