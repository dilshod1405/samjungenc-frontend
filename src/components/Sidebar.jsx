import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const adminSidebar = [
  { title: "계기반", icon: "dashboard", link: "/admin/dashboard" },
  { title: "사용자", icon: "users", link: "/admin/users" },
  { title: "기계", icon: "cogs", link: "/admin/machines" },
  { title: "주문", icon: "shopping-cart", link: "/admin/orders" },
  { title: "문서", icon: "file-alt", link: "/admin/documents" },
  { title: "서비스", icon: "tools", link: "/admin/services" },
];

const managerSidebar = [
  { title: "Dashboard", icon: "dashboard", link: "/manager/dashboard" },
  { title: "Users", icon: "users", link: "/manager/users" },
];

const serviceManagerSidebar = [
  { title: "Dashboard", icon: "dashboard", link: "/service-manager/dashboard" },
  { title: "Users", icon: "users", link: "/service-manager/users" },
];

const Sidebar = () => {
  const location = useLocation(); // Get current route
  const role = localStorage.getItem("role");

  let sidebar = [];
  if (role === "admin") {
    sidebar = adminSidebar;
  } else if (role === "manager") {
    sidebar = managerSidebar;
  } else if (role === "service-manager") {
    sidebar = serviceManagerSidebar;
  }

  return (
    <div className="bg-white h-screen w-1/5 md:w-1/6 shadow-xl z-10 fixed top-0 left-0 overflow-y-auto border-r border-gray-200 animate__animated animate__fadeInLeft">
      <div className="sidebar">
        <div className="sidebar-header">
          <img
            src="http://en.speedchiller.com/images/common/logo_en.svg"
            alt=""
            className="w-2/3 mx-auto my-4"
          />
          <h3 className="text-2xl font-bold mb-4 text-center text-gray-600">
            {role?.toUpperCase()}
          </h3>
        </div>
        <ul className="flex flex-col">
          {sidebar.map((item, index) => (
            <NavLink
              to={item.link}
              key={index}
              className={({ isActive }) =>
                `rounded-md shadow-md text-[#001a6ecc] m-3 transition ease-in-out duration-200 ${
                  isActive ? "bg-[#001a6ecc] text-white" : "hover:bg-[#001a6ecc] hover:text-white"
                }`
              }
            >
              <li className="p-3 flex items-center">
                <span className="icon">
                  <i className={`fas fa-${item.icon}`}></i>
                </span>
                <span className="text-lg ml-2 font-semibold">{item.title}</span>
              </li>
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
