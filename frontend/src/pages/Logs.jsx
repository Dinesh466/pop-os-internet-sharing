import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/api";

function Logs() {
  const { name } = useParams();

  const [logs, setLogs] = useState("Loading...");

  const logRef = useRef(null);

  async function loadLogs() {
    try {
      const res = await api.get(`/containers/${name}/logs`);

      const rawLogs =
        typeof res.data === "string"
          ? res.data
          : res.data.logs || JSON.stringify(res.data, null, 2);

      // Remove ANSI terminal color codes
      const cleanLogs = rawLogs.replace(
        /\x1B\[[0-9;]*[A-Za-z]/g,
        ""
      );

      setLogs(cleanLogs);
    } catch (err) {
      console.error(err);
      setLogs("Unable to load logs.");
    }
  }

  // Load once and refresh every 5 seconds
  useEffect(() => {
    loadLogs();

    const timer = setInterval(loadLogs, 5000);

    return () => clearInterval(timer);
  }, [name]);

  // Auto-scroll to bottom whenever logs change
  useEffect(() => {
    if (logRef.current) {
      logRef.current.scrollTop = logRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>📄 Logs - {name}</h1>

      <button
        onClick={loadLogs}
        style={{
          padding: "10px 18px",
          marginBottom: "15px",
          cursor: "pointer",
          borderRadius: "6px",
          border: "none",
          background: "#2563eb",
          color: "white",
          fontWeight: "bold",
        }}
      >
        🔄 Refresh Logs
      </button>

      <pre
        ref={logRef}
        style={{
          background: "#111",
          color: "#00ff66",
          padding: "20px",
          borderRadius: "10px",
          height: "650px",
          overflowY: "auto",
          overflowX: "auto",
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
          fontFamily: "monospace",
          fontSize: "13px",
          lineHeight: "1.5",
          border: "1px solid #333",
        }}
      >
        {logs}
      </pre>
    </div>
  );
}

export default Logs;
