import { useNavigate } from "react-router-dom";

import {
  startContainer,
  stopContainer,
  restartContainer,
} from "../../api/docker";

function ActionButtons({ container, refresh }) {
  const navigate = useNavigate();

  async function handleStart() {
    await startContainer(container.name);
    refresh();
  }

  async function handleStop() {
    if (!window.confirm(`Stop ${container.name}?`)) return;

    await stopContainer(container.name);
    refresh();
  }

  async function handleRestart() {
    await restartContainer(container.name);
    refresh();
  }

  function handleLogs() {
    navigate(`/logs/${container.name}`);
  }

  return (
    <div style={{ display: "flex", gap: "8px" }}>
      <button onClick={handleStart}>▶</button>

      <button onClick={handleStop}>■</button>

      <button onClick={handleRestart}>↻</button>

      <button onClick={handleLogs}>📄</button>
    </div>
  );
}

export default ActionButtons;
