import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "./pages/layouts/app";
import { Dashboard } from "./pages/app/Dashboard";
import { SingIn } from "./pages/auth/sing-in";
import { AuthLayout } from "./pages/layouts/auth";
import { SingUp } from "./pages/auth/sing-up";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [{ index: true, path: "/", element: <Dashboard /> }],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "/sing-in", element: <SingIn /> },
      { path: "/sing-up", element: <SingUp /> },
    ],
  },
]);
