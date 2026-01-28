import React from "react";
import {Outlet} from "react-router";

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <aside className="hidden w-full max-w-[270px] lg:block">Sidebar</aside>
      <aside className="children">
        <Outlet />
      </aside>
    </div>
  );
};

export default AdminLayout;
