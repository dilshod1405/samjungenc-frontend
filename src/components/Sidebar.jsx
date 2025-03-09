import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import DoorSlidingIcon from '@mui/icons-material/DoorSliding';
import ChecklistIcon from '@mui/icons-material/Checklist';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import EngineeringIcon from '@mui/icons-material/Engineering';
import { Button } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const adminSidebar = [
  { title: "계기반", icon: <DashboardIcon />, link: "/admin/dashboard" },
  { title: "사용자", icon: <PeopleIcon />, link: "/admin/users" },
  { title: "기계", icon: <DoorSlidingIcon />, link: "/admin/machines" },
  { title: "주문", icon: <ChecklistIcon />, link: "/admin/orders" },
  { title: "문서", icon: <InsertDriveFileIcon />, link: "/admin/documents" },
  { title: "서비스", icon: <EngineeringIcon />, link: "/admin/services" },
];

const managerSidebar = [
  { title: "계기반", icon: <DashboardIcon />, link: "/manager/dashboard" },
  { title: "기계", icon: <DoorSlidingIcon />, link: "/manager/machines" },
  { title: "주문", icon: <ChecklistIcon />, link: "/manager/orders" },
  { title: "문서", icon: <InsertDriveFileIcon />, link: "/manager/documents" },
  { title: "서비스", icon: <EngineeringIcon />, link: "/manager/services" },
];

const serviceManagerSidebar = [
  { title: "계기반", icon: <DashboardIcon />, link: "/service-manager/dashboard" },
  { title: "기계", icon: <DoorSlidingIcon />, link: "/service-manager/machines" },
  { title: "주문", icon: <ChecklistIcon />, link: "/service-manager/orders" },
  { title: "문서", icon: <InsertDriveFileIcon />, link: "/service-manager/documents" },
  { title: "서비스", icon: <EngineeringIcon />, link: "/service-manager/services" },
];

const teamLeadSidebar = [
  { title: "계기반", icon: <DashboardIcon />, link: "/service-manager/dashboard" },
  { title: "기계", icon: <DoorSlidingIcon />, link: "/service-manager/machines" },
  { title: "주문", icon: <ChecklistIcon />, link: "/service-manager/orders" },
  { title: "문서", icon: <InsertDriveFileIcon />, link: "/service-manager/documents" },
  { title: "서비스", icon:<EngineeringIcon />, link: "/service-manager/services" },
];

const workerSidebar = [
  { title: "계기반", icon: <DashboardIcon />, link: "/worker/dashboard" },
  { title: "주문", icon: <ChecklistIcon />, link: "/worker/orders" },
  { title: "문서", icon: <InsertDriveFileIcon />, link: "/worker/documents" },
];

const Sidebar = () => {
  const location = useLocation(); // Get current route
  const role = localStorage.getItem("role");

  let sidebar = [];
  if (role === "admin") {
    sidebar = adminSidebar;
  } else if (role === "manager") {
    sidebar = managerSidebar;
  } else if (role === "service_manager") {
    sidebar = serviceManagerSidebar;
  } else if (role === "teamlead") {
    sidebar = teamLeadSidebar;
  } else if (role === "worker") {
    sidebar = workerSidebar;
  }

  return (
    <div className="bg-white h-screen w-1/5 md:w-1/6 shadow-xl z-10 fixed top-0 left-0 overflow-y-auto border-r border-gray-200 animate__animated animate__fadeInLeft">
      <div className="sidebar">
        <div className="sidebar-header">
          <img
            src="logo_en.svg"
            alt=""
            className="w-2/3 mx-auto my-4"
          />
          <h3 className="text-xl font-bold mb-4 text-center text-gray-600 font-sans tracking-wider flex items-center justify-center">
            <span className=" mr-2 text-lg">🔵</span>{role?.toUpperCase()}
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
                <span className="icon">{item.icon} |</span>
                <span className="text-lg ml-2 font-semibold">{item.title}</span>
              </li>
            </NavLink>
          ))}
        </ul>
        <div className="flex justify-center">
          <hr className="w-4/5 border-gray-300 my-3" />
        </div>
        <div className="flex justify-center">
          <Button
            style={{ backgroundColor: "#f44336", color: "white", fontSize: "14px" }}
            onClick={() => {
              localStorage.clear();
              window.location.href = "/";
            }}
            className="m-3 w-1/2 mx-auto block"
            variant="contained"
            color="error"
          >
            <ArrowBackIcon /> 로그아웃
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
