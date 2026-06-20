function Navbar() {
  return (
    <div
      style={{
        background: "white",
        padding: "18px 25px",
        borderRadius: "15px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "25px",
      }}
    >
      <div>
        <h2 style={{ margin: 0 }}>📊 Business Intelligence Dashboard</h2>
        <p style={{ color: "#777", marginTop: "5px" }}>
          Welcome back, Akshitha 👋
        </p>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <input
          type="text"
          placeholder="🔍 Search..."
          style={{
            padding: "10px 15px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            width: "220px",
          }}
        />

        <span style={{ fontSize: "24px", cursor: "pointer" }}>🔔</span>

        <div
          style={{
            background: "#2563eb",
            color: "white",
            padding: "10px 15px",
            borderRadius: "25px",
            fontWeight: "bold",
          }}
        >
          AR
        </div>
      </div>
    </div>
  );
}

export default Navbar;