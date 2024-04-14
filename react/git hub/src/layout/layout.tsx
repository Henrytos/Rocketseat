import { Outlet } from "react-router-dom";
import { Header } from "../components/header";

export function LayoutHomePage() {
  return (
    <>
      <main className="w-full min-h-screen  text-white antialiased bg-base-background">
        <Header />
        <Outlet />
      </main>
    </>
  );
}
