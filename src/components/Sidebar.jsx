function Sidebar() {
  return (
    <div
      style={{
        width: "240px",
        height: "100vh",
        background: "#1e3a8a",
        color: "white",
        padding: "25px",
      }}
    >
      <h2 style={{ marginBottom: "40px" }}>📊 BI Dashboard</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <p>🏠 Dashboard</p>
        <p>📈 Analytics</p>
        <p>📂 Upload Data</p>
        <p>📄 Reports</p>
        <p>⚙ Settings</p>
      </div>

      <div style={{ marginTop: "80px", color: "#cbd5e1" }}>
        <p>Version 1.0</p>
      </div>
    </div>
  );
}

export default Sidebar;