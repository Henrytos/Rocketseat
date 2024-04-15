import { createBrowserRouter } from "react-router-dom";
import { LayoutHomePage } from "./layout/layout";
import { HomePage } from "./pages/home";
import { RepositoryPage } from "./pages/repository";

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
      {
        path: ":id",
        element: <RepositoryPage />,
      },
    ],
  },
]);
