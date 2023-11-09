import Nav from "@/components/shared/Nav";
import React from "react";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-white dark:bg-black relative text-gray-900 dark:text-gray-100 duration-500">
      <Nav />
      <div className="flex-center">{children}</div>
    </main>
  );
};

export default Layout;
