import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <main>
      <h1>cabeçalho</h1>
      <Outlet />
    </main>
  );
}
