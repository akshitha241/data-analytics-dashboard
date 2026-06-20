import { useState } from "react";

function Sidebar() {
  const [active, setActive] = useState("Dashboard");

  const scrollToSection = (id, name) => {
    setActive(name);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const menus = [
    { name: "Dashboard", icon: "🏠", id: "top" },
    { name: "Upload Data", icon: "📂", id: "upload" },
    { name: "Sales Analytics", icon: "📈", id: "sales" },
    { name: "Categories", icon: "📊", id: "category" },
    { name: "Regions", icon: "🌍", id: "region" },
    { name: "Profit", icon: "💰", id: "profit" },
    { name: "Sales Records", icon: "📋", id: "table" },
  ];

  return (
    <div
      style={{
        width: "240px",
        background: "#1e3a8a",
        minHeight: "100vh",
        padding: "25px",
        color: "white",
        position: "sticky",
        top: 0,
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "35px" }}>
        📊 BI Dashboard
      </h2>

      {menus.map((menu) => (
        <div
          key={menu.name}
          onClick={() => scrollToSection(menu.id, menu.name)}
          style={{
            padding: "14px",
            marginBottom: "12px",
            borderRadius: "12px",
            cursor: "pointer",
            transition: "0.3s",
            background: active === menu.name ? "#2563eb" : "transparent",
            fontWeight: "600",
          }}
        >
          {menu.icon} {menu.name}
        </div>
      ))}
    </div>
  );
}

export default Sidebar;