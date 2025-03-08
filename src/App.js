import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './Authentication/Login';
import Administrator from './Admin/Administrator';
import Manager from './Manager/Manager';
import TeamLead from './TeamLead/TeamLead';
import Worker from './Worker/Worker';
import ProtectedRoute from './Authentication/ProtectedRoute';
import ServiceManager from './ServiceManager/ServiceManager';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
          <Route path="/admin" element={<Administrator />} />
        </Route>
        <Route element={<ProtectedRoute allowedRoles={["manager"]} />}>
          <Route path="/manager" element={<Manager />} />
        </Route>
        <Route element={<ProtectedRoute allowedRoles={["service_manager"]} />}>
          <Route path="/service-manager" element={<ServiceManager />} />
        </Route>
        <Route element={<ProtectedRoute allowedRoles={["teamlead"]} />}>
          <Route path="/teamlead" element={<TeamLead />} />
        </Route>
        <Route element={<ProtectedRoute allowedRoles={["worker"]} />}>
          <Route path="/worker" element={<Worker />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
