import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ allowedRoles }) => {
  const token = localStorage.getItem('access');
  const userRole = localStorage.getItem('role');

  if (!token) return <Navigate to="/login" />;

  

  return allowedRoles.includes(userRole) ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
