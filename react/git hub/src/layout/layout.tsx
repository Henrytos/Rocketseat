import { Outlet } from "react-router-dom";

export function LayoutHomePage() {
  return (
    <>
      <main className="w-full min-h-screen bg-black text-white antialiased">
        <header></header>
        <Outlet />
        <footer></footer>
      </main>
    </>
  );
}
