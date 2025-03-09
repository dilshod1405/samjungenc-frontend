import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './Authentication/Login';
import Administrator from './Admin/Administrator';
import Manager from './Manager/Manager';
import TeamLead from './TeamLead/TeamLead';
import Worker from './Worker/Worker';
import ProtectedRoute from './Authentication/ProtectedRoute';
import ServiceManager from './ServiceManager/ServiceManager';
import Dashboard from './Admin/Dashboard';
import Users from './Admin/Users';
import Machine from './Admin/Machine';
import Orders from './Admin/Orders';
import Docs from './Admin/Docs';
import Service from './Admin/Service';

const data = [
  {
    path: "/admin",
    allowedRoles: ["admin"],
    component: <Administrator />,
  },
  {
    path: "/manager",
    allowedRoles: ["manager"],
    component: <Manager />,
  },
  {
    path: "/service-manager",
    allowedRoles: ["service_manager"],
    component: <ServiceManager />,
  },
  {
    path: "/teamlead",
    allowedRoles: ["teamlead"],
    component: <TeamLead />,
  },
  {
    path: "/worker",
    allowedRoles: ["worker"],
    component: <Worker />,
  },
  {
    path: "/admin/dashboard",
    allowedRoles: ["admin"],
    component: <Dashboard />,
  },
  {
    path: "/admin/users",
    allowedRoles: ["admin"],
    component: <Users />,
  },
  {
    path: "/admin/machines",
    allowedRoles: ["admin"],
    component: <Machine />,
  },
  {
    path: "/admin/orders",
    allowedRoles: ["admin"],
    component: <Orders />,
  },
  {
    path: "/admin/documents",
    allowedRoles: ["admin"],
    component: <Docs />,
  },
  {
    path: "/admin/services",
    allowedRoles: ["admin"],
    component: <Service />,
  },
]
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        {data.map((route, index) => (
         <Route
          key={index}
          path={route.path}
          element={<ProtectedRoute allowedRoles={route.allowedRoles} />}
         >
          <Route path={route.path} element={route.component} />
         </Route>
        ))}
      </Routes>
    </div>
  );
}

export default App;
