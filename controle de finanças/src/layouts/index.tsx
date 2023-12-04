import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <main className="h-screen py-10  text-gray-100 bg-gray-800">
      <div className="w-full h-[calc(100vh_-_10rem)]  max-w-6xl m-auto  rounded-md font-roboto">
        <Outlet />
      </div>
    </main>
  );
}
