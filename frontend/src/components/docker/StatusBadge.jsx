function StatusBadge({ status }) {
  const running = status === "running";

  return (
    <span
      style={{
        padding: "6px 12px",
        borderRadius: "20px",
        backgroundColor: running ? "#16a34a" : "#dc2626",
        color: "white",
        fontWeight: "bold",
      }}
    >
      {running ? "🟢 Running" : "🔴 Stopped"}
    </span>
  );
}

export default StatusBadge;
