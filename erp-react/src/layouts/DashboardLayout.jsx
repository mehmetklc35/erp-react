import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
