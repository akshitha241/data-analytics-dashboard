function KPICards() {
  const cards = [
    { title: "Total Sales", value: "₹1,25,000", color: "#2563eb" },
    { title: "Profit", value: "₹28,500", color: "#10b981" },
    { title: "Customers", value: "540", color: "#f59e0b" },
    { title: "Orders", value: "320", color: "#ef4444" },
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        gap: "20px",
        marginTop: "25px",
      }}
    >
      {cards.map((card, index) => (
        <div
          key={index}
          style={{
            background: "white",
            borderRadius: "15px",
            padding: "25px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
            borderLeft: `6px solid ${card.color}`,
          }}
        >
          <h4 style={{ color: "#666" }}>{card.title}</h4>

          <h2 style={{ marginTop: "10px", color: card.color }}>
            {card.value}
          </h2>
        </div>
      ))}
    </div>
  );
}

export default KPICards;