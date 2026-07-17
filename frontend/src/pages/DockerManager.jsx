import { useEffect, useState } from "react";
import api from "../api/api";

import ContainerTable from "../components/docker/ContainerTable";

function DockerManager() {
  const [containers, setContainers] = useState([]);

  function loadContainers() {
    api.get("/containers")
      .then((res) => {
        setContainers(res.data);
      })
      .catch(console.error);
  }

  useEffect(() => {
    loadContainers();

    const timer = setInterval(loadContainers, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1>🐳 Docker Manager</h1>

		      <ContainerTable
		  containers={containers}
		  refresh={loadContainers}
		/>
    </div>
  );
}

export default DockerManager;
