import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import History from "./pages/History";
import Layout from "./layouts";
import Teste from "./pages/Teste";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "/history",
        element: <History />,
      },
      {
        path: "/teste",
        element: <Teste />,
      },
    ],
  },
]);
