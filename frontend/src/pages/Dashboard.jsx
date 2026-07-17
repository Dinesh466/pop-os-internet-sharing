import { useEffect, useState } from "react";
import api from "../api/api";
import StatCard from "../components/dashboard/StatCard";

function Dashboard() {
  const [dashboard, setDashboard] = useState(null);

  useEffect(() => {
    loadDashboard();
  }, []);

  function loadDashboard() {
    api.get("/dashboard")
      .then((res) => {
        setDashboard(res.data);
      })
      .catch((err) => console.error(err));
  }

  if (!dashboard) return <h2>Loading...</h2>;

  return (
    <div>
	<h1
	style={{
	fontSize: "36px",
	marginBottom: "30px",
	}}>
	🚀 Pop!_OS Internet Sharing Platform
	</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        <StatCard
          title="CPU Usage"
          value={`${dashboard.system.cpu_percent}%`}
        />

        <StatCard
          title="Memory Usage"
          value={`${dashboard.system.memory_percent}%`}
        />

        <StatCard
          title="Disk Usage"
          value={`${dashboard.system.disk_percent}%`}
        />

        <StatCard
          title="Docker Version"
          value={dashboard.docker.version}
        />

                <StatCard
          title="Running Containers"
          value={dashboard.docker.running_containers}
        />

        <StatCard
          title="Total Containers"
          value={dashboard.docker.total_containers}
        />
      </div>
    </div>
  );
}

export default Dashboard;
