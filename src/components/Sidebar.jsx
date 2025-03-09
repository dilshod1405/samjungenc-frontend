import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
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
  { title: "계기반", icon: <DashboardIcon />, link: "/teamlead/dashboard" }, 
  { title: "기계", icon: <DoorSlidingIcon />, link: "/teamlead/machines" },
  { title: "주문", icon: <ChecklistIcon />, link: "/teamlead/orders" },
  { title: "문서", icon: <InsertDriveFileIcon />, link: "/teamlead/documents" },
  { title: "서비스", icon:<EngineeringIcon />, link: "/teamlead/services" },
];

const workerSidebar = [
  { title: "계기반", icon: <DashboardIcon />, link: "/worker/dashboard" },
  { title: "주문", icon: <ChecklistIcon />, link: "/worker/orders" },
  { title: "문서", icon: <InsertDriveFileIcon />, link: "/worker/documents" },
];

const Sidebar = (props) => {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  let sidebar = [];
  switch (role) {
    case "admin":
      sidebar = adminSidebar;
      break;
    case "manager":
      sidebar = managerSidebar;
      break;
    case "service_manager":
      sidebar = serviceManagerSidebar;
      break;
    case "teamlead":
      sidebar = teamLeadSidebar;
      break;
    case "worker":
      sidebar = workerSidebar;
      break;
    default:
      sidebar = [];
  }

  return (
    <div className={`bg-white h-screen md:w-1/5 sticky top-0 shadow-xl z-20 border-r border-gray-200 ${props.open ? 'hidden' : ''}`}>
      <div className="sidebar">
        <div className="sidebar-header">
          <img src="/logo_en.svg" alt="logo" className="w-2/3 mx-auto my-4"/>
          <h3 className="text-xl font-bold mb-4 text-center text-gray-600 font-sans tracking-wider flex items-center justify-center">
            <span className="mr-2 text-lg">🔵</span>{role?.toUpperCase()}
          </h3>
        </div>
        <ul className="flex flex-col">
          {sidebar.map((item, index) => (
            <NavLink
              to={item.link}
              key={index}
              className={({ isActive }) =>
                `flex items-center rounded-md shadow-md text-[#001a6ecc] m-3 p-3 transition ease-in-out duration-200 ${
                  isActive ? "bg-[#001a6ecc] text-white" : "hover:bg-[#001a6ecc] hover:text-white"
                }`
              }
            >
              <span className="icon">{item.icon} -</span>
              <span className="text-lg ml-2 font-semibold"> {item.title}</span>
            </NavLink>
          ))}
        </ul>
        <div className="flex justify-center">
          <hr className="w-4/5 border-gray-300 my-3" />
        </div>
        <div className="flex justify-center">
          <Button
            style={{ color: "white", fontSize: "14px" }}
            onClick={() => {
              localStorage.clear();
              navigate("/");
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
