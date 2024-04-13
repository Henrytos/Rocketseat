import { createBrowserRouter } from "react-router-dom";
import { LayoutHomePage } from "./layout/layout";
import { HomePage } from "./pages/home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutHomePage />,
    children: [
      {
        index: true,
        path: "",
        element: <HomePage />,
      },
    ],
  },
]);
