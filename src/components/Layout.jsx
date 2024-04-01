// Layout.js

import React from "react";
import SidebarContent from "./Sidebar.jsx";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <SidebarContent />
      <div className="flex-grow">{children}</div>
    </div>
  );
};

export default Layout;
