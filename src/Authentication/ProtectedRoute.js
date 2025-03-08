import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ allowedRoles }) => {
  const role = localStorage.getItem("role"); // Get role from storage

  if (!role) {
    return <Navigate to="/" replace />; // Redirect if not logged in
  }

  if (!allowedRoles.includes(role)) {
    return <Navigate to="/" replace />; // Redirect if role is unauthorized
  }

  return <Outlet />; // Render the page if role matches
};

export default ProtectedRoute;
