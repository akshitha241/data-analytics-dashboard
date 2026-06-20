function Navbar() {
  return (
    <div
      style={{
        background: "#ffffff",
        padding: "20px 30px",
        borderRadius: "18px",
        marginBottom: "25px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <h2
          style={{
            margin: 0,
            color: "#1e3a8a",
          }}
        >
          📊 Interactive Data Analytics Dashboard!
        </h2>

        <p
          style={{
            marginTop: "8px",
            color: "#64748b",
          }}
        >
          Welcome back, Akshitha! 👋 Here's today's business overview.
        </p>
      </div>

      <div
        style={{
          background: "#2563eb",
          color: "white",
          padding: "10px 18px",
          borderRadius: "10px",
          fontWeight: "bold",
        }}
      >
      </div>
    </div>
  );
}

export default Navbar;