import { Helmet, HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { Toaster } from "sonner";
import { ThemeProvider } from "./theme/theme-provider";

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | pizza.shop" />
      <Toaster />
      <ThemeProvider storageKey="pizza-shop" defaultTheme="dark">
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  );
}
