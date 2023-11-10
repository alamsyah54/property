import Footer from "@/components/shared/Footer";
import Nav from "@/components/shared/Nav";
import React from "react";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-white relative text-gray-900 duration-500">
      <Nav />
      <div>{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;
