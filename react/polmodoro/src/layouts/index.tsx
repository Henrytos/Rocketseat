import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function Layout() {
  return (
    <main className="h-screen py-20  text-gray-100 bg-gray-900">
      <div className="w-full h-[calc(100vh_-_10rem)]  max-w-6xl m-auto bg-gray-800 rounded-md font-roboto">
        <Header />
        <Outlet />
      </div>
    </main>
  );
}
