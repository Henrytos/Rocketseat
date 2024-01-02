import { createBrowserRouter } from "react-router-dom";

import { AppLayout } from "./pages/layouts/app";
import { Dashboard } from "./pages/app/dashboard";
import { SingIn } from "./pages/auth/sing-in";

import { AuthLayout } from "./pages/layouts/auth";
import { SingUp } from "./pages/auth/sing-up";
import { Orders } from "./pages/app/orders/order";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/sing-in",
        element: <SingIn />,
      },
      {
        path: "/sing-up",
        element: <SingUp />,
      },
    ],
  },
]);
