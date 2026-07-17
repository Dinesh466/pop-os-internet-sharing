function StatCard({ title, value }) {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        padding: "20px",
        width: "220px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
        textAlign: "center",
      }}
    >
      <h3
        style={{
          color: "#555",
          marginBottom: "15px",
        }}
      >
        {title}
      </h3>

      <h1
        style={{
          color: "#222",
          margin: 0,
          fontSize: "32px",
          fontWeight: "bold",
        }}
      >
        {value}
      </h1>
    </div>
  );
}

export default StatCard;
