import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";

import Dashboard from "./pages/Dashboard";
import DockerManager from "./pages/DockerManager";
import Monitoring from "./pages/Monitoring";
import Earnings from "./pages/Earnings";
import Notifications from "./pages/Notifications";
import Logs from "./pages/Logs";
import Settings from "./pages/Settings";
import Backup from "./pages/Backup";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div style={{ display: "flex", minHeight: "100vh" }}>
        <Sidebar />

        <main style={{ flex: 1, padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/docker" element={<DockerManager />} />
            <Route path="/monitoring" element={<Monitoring />} />
            <Route path="/earnings" element={<Earnings />} />
            <Route path="/notifications" element={<Notifications />} />
	    <Route path="/logs/:name" element={<Logs />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/backup" element={<Backup />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
