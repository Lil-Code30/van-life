import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <Header />
      <main className="flex-1 min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
