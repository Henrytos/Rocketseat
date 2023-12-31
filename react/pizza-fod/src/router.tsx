import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "./pages/layouts/app";
import { Dashboard } from "./pages/app/Dashboard";
import { SingIn } from "./pages/auth/SingIn";
import { AuthLayout } from "./pages/layouts/auth";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [{ index: true, path: "/", element: <Dashboard /> }],
  },
  {
    path: "/sing-in",
    element: <AuthLayout />,
    children: [{ index: true, path: "/sing-in", element: <SingIn /> }],
  },
]);
