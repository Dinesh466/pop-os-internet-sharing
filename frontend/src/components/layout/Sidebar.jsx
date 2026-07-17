import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside style={{ width: "220px", padding: "20px", borderRight: "1px solid #ddd" }}>
      <h2>Platform</h2>

      <nav>
        <p><Link to="/">Dashboard</Link></p>
        <p><Link to="/docker">Docker Manager</Link></p>
        <p><Link to="/monitoring">Monitoring</Link></p>
        <p><Link to="/earnings">Earnings</Link></p>
        <p><Link to="/notifications">Notifications</Link></p>
        <p><Link to="/logs">Logs</Link></p>
        <p><Link to="/settings">Settings</Link></p>
        <p><Link to="/backup">Backup</Link></p>
      </nav>
    </aside>
  );
}

export default Sidebar;
