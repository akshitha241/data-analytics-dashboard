function Navbar() {
  return (
    <div
      style={{
        background: "white",
        padding: "15px 25px",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "20px",
      }}
    >
      <h2>Business Intelligence Dashboard</h2>

      <div>
        <input
          type="text"
          placeholder="Search..."
          style={{
            padding: "8px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />
      </div>
    </div>
  );
}

export default Navbar;