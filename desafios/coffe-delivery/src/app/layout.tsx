import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { CatalogContextProvider } from "@/contexts/CatolofContext";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Coffe felivery",
  description: "sitew de catologo de café",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <CatalogContextProvider>
          <div className="w-screen bg-background">
            <Header />
            {children}
          </div>
        </CatalogContextProvider>
      </body>
    </html>
  );
}
